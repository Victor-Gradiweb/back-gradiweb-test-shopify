const axios = require("axios");
const shopifyConfig = require("../config/config");

const getDiscounts = async () => {
  const query = `
    query {
  discountNodes(first: 10) {
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
          "X-Shopify-Access-Token": shopifyConfig.apiKey,
          "Content-Type": "application/json"
        }
      }
    );
    return response.data.data.discountNodes.edges;
  } catch (error) {
    console.log("El error es ---> ", error);
    throw new Error("Error en la consulta a Shopify");
  }
};

module.exports = { getDiscounts };
