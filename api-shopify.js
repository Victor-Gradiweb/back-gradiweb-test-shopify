import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const SHOP_NAME = process.env.SHOP_NAME;
const SHOPIFY_SHOP_DOMAIN = process.env.SHOPIFY_SHOP_DOMAIN;
const ACCESS_TOKEN = process.env.API_SECRET_KEY;

export const shopifyAPI = axios.create({
  baseURL: `https://${SHOP_NAME}${SHOPIFY_SHOP_DOMAIN}/admin/api/2024-07/graphql.json`,
  headers: {
    "X-Shopify-Access-Token": ACCESS_TOKEN,
    "Content-Type": "application/json"
  }
});
