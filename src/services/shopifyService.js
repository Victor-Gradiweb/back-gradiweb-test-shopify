const axios = require("axios");
const shopifyConfig = require("../config/config");

const getDiscounts = async () => {
  const query = `
    query {
      discountNodes(first: 10, query: "status:'ACTIVE'") {
        edges {
          node {
            id
            discount {
              ... on DiscountCodeBasic {
                title
                status
              }
              ... on DiscountCodeBxgy {
                title
                status
              }
              ... on DiscountCodeFreeShipping {
                title
                status
              }
              ... on DiscountAutomaticApp {
                title
                status
              }
              ... on DiscountAutomaticBasic {
                title
                status
              }
              ... on DiscountAutomaticBxgy {
                title
                status
              }
              ... on DiscountAutomaticFreeShipping {
                title
                status
              }
            }
          }
        }
      }
    }
  `;

  try {
    console.log("url es --> ", shopifyConfig.apiUrl);
    console.log("apiPassword es --> ", shopifyConfig.apiPassword);
    const response = await axios.post(
      shopifyConfig.apiUrl,
      { query },
      {
        headers: {
          "X-Shopify-Access-Token": "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",
          "Content-Type": "application/json"
        }
      }
    );
    console.log("response --> ", response.data.data.discountNodes.edges);
    return response.data.data.discountNodes.edges;
  } catch (error) {
    console.error("Error al obtener descuentos:", error);
    throw new Error("Error en la consulta a Shopify");
  }
};

module.exports = { getDiscounts };
