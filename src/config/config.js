require("dotenv").config();

const shopifyConfig = {
  shopDomain: process.env.SHOPIFY_SHOP_DOMAIN,
  apiKey: process.env.API_KEY,
  apiPassword: process.env.API_SECRET_KEY,
  apiUrl: `https://gradiweb-test-store.myshopify.com/admin/api/2024-10/graphql.json`
};

module.exports = shopifyConfig;
