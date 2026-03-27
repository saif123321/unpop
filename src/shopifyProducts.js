import client from "./shopify";

export async function getUnpopProduct() {
  const products = await client.product.fetchAll();

  const product = products.find(p =>
    p.title.toLowerCase().includes("unpop")
  );

  return {
    title: product.title,
    price: product.variants[0].price.amount,
    variantId: product.variants[0].id,
    image: product.images[0].src,
  };
}