import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "0xm01y-yd.myshopify.com",
  storefrontAccessToken: "5904e21b1bac26f6f81fcec73916ecc2",
});

export default client;