import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "cv"]`;

export const fetchcv = async () => {
  const cmsresume = await sanityClient.fetch(query);
  return cmsresume;
};
