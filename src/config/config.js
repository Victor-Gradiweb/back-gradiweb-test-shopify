require("dotenv").config();

const shopifyConfig = {
  apiKey: process.env.API_KEY,
  apiUrl: process.env.API_URL
};

module.exports = shopifyConfig;
