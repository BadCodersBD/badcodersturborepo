

import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "servicesgallery"]`;

export const fetchservicesgallery = async () => {
  const cmsServicesgallery = await sanityClient.fetch(query);
  return cmsServicesgallery;
};
