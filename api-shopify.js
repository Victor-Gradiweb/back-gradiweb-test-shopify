import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const SHOP_NAME = process.env.API_KEY;
const ACCESS_TOKEN = process.env.SHOP_NAME;

export const shopifyAPI = axios.create({
  baseURL: `https://${SHOP_NAME}.myshopify.com/admin/api/2024-07/graphql.json`,
  headers: {
    "X-Shopify-Access-Token": ACCESS_TOKEN,
    "Content-Type": "application/json",
  },
});
