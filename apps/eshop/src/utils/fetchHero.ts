import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "hero"]`;

export const fetchhero = async () => {
  const cmsHeroSection = await sanityClient.fetch(query);
  return cmsHeroSection;
};
