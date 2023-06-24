import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "logo"]`;

export const fetchlogo = async () => {
  const cmsLogoSection = await sanityClient.fetch(query);
  return cmsLogoSection;
};