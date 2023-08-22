import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "social"]`;

export const fetchSocialIcon = async () => {
  const cmsSocialicon = await sanityClient.fetch(query);
  return cmsSocialicon;
};
