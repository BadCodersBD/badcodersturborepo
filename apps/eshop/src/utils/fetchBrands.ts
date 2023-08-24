import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "brands"]`;

export const fetchBrands = async () => {
  const cmsBrands = await sanityClient.fetch(query);
  return cmsBrands;
};
