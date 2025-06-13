// src/utils/sdk.ts
import { strapi } from "@strapi/client";

export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
}

const BASE_API_URL = getStrapiURL() + "/api";
const sdk = strapi({
  baseURL: BASE_API_URL,
  auth: process.env.STRAPI_API_TOKEN,
  headers: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
  },
});
export default sdk;
