import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "products"]`;

export const fetchProducts = async () => {
  const cmsProducts = await sanityClient.fetch(query);
  return cmsProducts;
};
