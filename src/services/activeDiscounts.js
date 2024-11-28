const axios = require("axios");
const shopifyConfig = require("../config/config");

const getActiveDiscounts = async () => {
  const query = `
  query {
    metaobjects(type: "discounts", first: 100) {
      edges {
        node {
          id
          displayName
          type
          field(key: "code") {
            value  # Si es una lista o un objeto, ajustar este campo según sea necesario
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
    console.log(response.data.data.metaobjects.edges);
    return response.data.data.metaobjects.edges;
  } catch (error) {
    console.error("Error al obtener descuentos:", error);
    throw new Error("Error en la consulta a Shopify");
  }
};

module.exports = { getActiveDiscounts };
