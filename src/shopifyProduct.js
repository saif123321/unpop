import client from "./shopify";

export async function getUnpopProduct() {
  const products = await client.product.fetchAll();

  const product = products[0];
  const variants = product.variants.map((variant) => ({
    id: variant.id,
    title: variant.title,
    price: variant.price.amount,
  }));

  return {
    title: product.title,
    image: product.images[0]?.src,
    optionName: product.options?.[0]?.name || "Package type",
    variants,
    variantId: variants[0]?.id,
    price: variants[0]?.price,
  };
}