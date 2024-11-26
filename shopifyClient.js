const axios = require("axios");
require("dotenv").config();

const shopifyUrl = `https://${process.env.SHOP_NAME}${process.env.SHOPIFY_SHOP_DOMAIN}/admin/api/2023-10/graphql.json`;
const shopifyHeaders = {
  "X-Shopify-Access-Token": process.env.API_SECRET_KEY,
  "Content-Type": "application/json"
};

// Función para realizar una consulta GraphQL
const runQuery = async (query) => {
  try {
    const response = await axios.post(
      shopifyUrl,
      { query },
      { headers: shopifyHeaders }
    );
    return response.data;
  } catch (error) {
    console.error("Error en la consulta a Shopify:", error.message);
    throw error;
  }
};

module.exports = { runQuery };
