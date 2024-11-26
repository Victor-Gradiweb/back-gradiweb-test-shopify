const axios = require("axios");
const shopifyConfig = require("../config/config");

const getActiveDiscounts = async () => {
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
    const response = await axios.post(
      shopifyConfig.apiUrl,
      { query },
      {
        headers: {
          "X-Shopify-Access-Token": shopifyConfig.apiPassword,
          "Content-Type": "application/json"
        }
      }
    );
    return response.data.data.discountNodes.edges.filter(
      (item) => item.node.discount.status === "ACTIVE"
    );
  } catch (error) {
    console.error("Error al obtener descuentos:", error);
    throw new Error("Error en la consulta a Shopify");
  }
};

module.exports = { getActiveDiscounts };
