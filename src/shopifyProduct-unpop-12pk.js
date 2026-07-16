import client from "./shopify";
import { assetUrl } from "./utils/assetUrl";

const PRODUCT_NAME =
  "unPop! Sublime Cola 12oz | All-natural soda, sweetened with dates";

const STORE_DOMAIN = "buy.drinkunpop.com";
const STOREFRONT_TOKEN = "5904e21b1bac26f6f81fcec73916ecc2";
const STOREFRONT_API = `https://${STORE_DOMAIN}/api/2024-10/graphql.json`;

function getCansFromTitle(title = "") {
  const match = title.match(/(\d+)\s*(pack|pk|can)?/i);
  return match ? Number(match[1]) : null;
}

function mapVariant(variant) {
  const price = Number(variant.price.amount);
  const cans = getCansFromTitle(variant.title) || 1;

  return {
    id: String(variant.id),
    title: variant.title,
    price,
    cans,
    perCan: Number((price / cans).toFixed(2)),
  };
}

function stripHtml(value = "") {
  return value
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .trim();
}

function parseMetafieldValue(metafield) {
  if (!metafield?.value) return "";

  const raw = metafield.value;
  const type = metafield.type || "";

  // Rich text metafields store JSON
  if (type.includes("rich_text") || raw.trim().startsWith("{")) {
    try {
      const parsed = JSON.parse(raw);
      return richTextToHtml(parsed) || raw;
    } catch {
      return raw;
    }
  }

  return raw;
}

function richTextToHtml(node) {
  if (!node) return "";
  if (typeof node === "string") return node;

  if (Array.isArray(node)) {
    return node.map(richTextToHtml).join("");
  }

  if (node.type === "root" && Array.isArray(node.children)) {
    return node.children.map(richTextToHtml).join("");
  }

  if (node.type === "paragraph") {
    const inner = (node.children || []).map(richTextToHtml).join("");
    return `<p>${inner}</p>`;
  }

  if (node.type === "list") {
    const tag = node.listType === "ordered" ? "ol" : "ul";
    const items = (node.children || []).map(richTextToHtml).join("");
    return `<${tag}>${items}</${tag}>`;
  }

  if (node.type === "list-item") {
    const inner = (node.children || []).map(richTextToHtml).join("");
    return `<li>${inner}</li>`;
  }

  if (node.type === "heading") {
    const level = node.level || 2;
    const inner = (node.children || []).map(richTextToHtml).join("");
    return `<h${level}>${inner}</h${level}>`;
  }

  if (node.type === "text") {
    let text = node.value || "";
    if (node.bold) text = `<strong>${text}</strong>`;
    if (node.italic) text = `<em>${text}</em>`;
    return text;
  }

  if (node.children) {
    return node.children.map(richTextToHtml).join("");
  }

  return "";
}

function toBullets(value = "") {
  const text = stripHtml(value);
  if (!text) return [];

  return text
    .split(/\n|•|\u2022|(?<=\.)\s+(?=[A-Z])/)
    .map((line) => line.trim())
    .filter(Boolean);
}

async function fetchCustomMetafields(handle) {
  const query = `
    query ProductCustomFields($handle: String!) {
      product(handle: $handle) {
        summary: metafield(namespace: "custom", key: "r_product_summery") {
          value
          type
        }
        productDescription: metafield(namespace: "custom", key: "r_product_descriptions") {
          value
          type
        }
      }
    }
  `;

  const response = await fetch(STOREFRONT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
    },
    body: JSON.stringify({
      query,
      variables: { handle },
    }),
  });

  if (!response.ok) {
    throw new Error(`Metafield request failed: ${response.status}`);
  }

  const json = await response.json();

  if (json.errors?.length) {
    console.error("Shopify metafield errors:", json.errors);
  }

  return json.data?.product || null;
}

export async function getProductByName(productName = PRODUCT_NAME) {
  const products = await client.product.fetchAll();

  const product =
    products.find(
      (item) =>
        item.title.trim().toLowerCase() === productName.trim().toLowerCase()
    ) ||
    products.find((item) => item.title.toLowerCase().includes("sublime cola")) ||
    products.find((item) => item.title.toLowerCase().includes("unpop")) ||
    products[0];

  if (!product) {
    throw new Error(`Product not found: ${productName}`);
  }

  const variants = product.variants
    .map(mapVariant)
    .sort((a, b) => a.cans - b.cans);
  const defaultVariant =
    variants.find((variant) => variant.cans === 6) ||
    variants.find((variant) => variant.title.toLowerCase().includes("6")) ||
    variants[0];

  let summaryMeta = "";
  let descriptionMeta = "";

  try {
    const metafields = await fetchCustomMetafields(product.handle);
    summaryMeta = parseMetafieldValue(metafields?.summary);
    descriptionMeta = parseMetafieldValue(metafields?.productDescription);
  } catch (error) {
    console.error("Failed to load custom product metafields:", error);
  }

  const fallbackDescription = product.description || "";
  const descriptionSource = descriptionMeta || fallbackDescription;

  const shortDescription =
    stripHtml(summaryMeta) ||
    fallbackDescription.split(/\.|\n/).filter(Boolean)[0]?.trim() ||
    "All-natural soda, sweetened with dates. Real spices, botanical craft, zero junk.";

  return {
    id: product.id,
    title: product.title,
    handle: product.handle,
    // custom.r_product_summery
    shortDescription,
    summaryHtml: summaryMeta || null,
    // custom.r_product_descriptions — always treat as HTML
    description: stripHtml(descriptionSource),
    descriptionHtml: descriptionMeta || fallbackDescription || null,
    descriptionBullets: toBullets(descriptionSource),
    image: product.images[0]?.src || assetUrl("/images/soda-can.png"),
    images:
      product.images?.length > 0
        ? product.images.map((img) => img.src)
        : [assetUrl("/images/soda-can.png")],
    optionName: product.options?.[0]?.name || "Package type",
    variants,
    variantId: defaultVariant?.id,
    price: defaultVariant?.price,
    reviewCount: 10,
  };
}

export async function getUnpopSublimeColaProduct() {
  return getProductByName(PRODUCT_NAME);
}

export default getProductByName;
