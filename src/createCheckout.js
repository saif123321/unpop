import client from "./shopify";

export async function createCheckout(variantId, quantity) {

  const checkout = await client.checkout.create();

  await client.checkout.addLineItems(checkout.id, [
    {
      variantId,
      quantity
    }
  ]);

  return checkout.webUrl;
}