import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "limocarousel"]`;

export const fetchCargallery = async () => {
  const cmsCars = await sanityClient.fetch(query);
  return cmsCars;
};
