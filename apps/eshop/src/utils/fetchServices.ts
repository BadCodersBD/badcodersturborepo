import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "services"]`;

export const fetchservice = async () => {
  const cmsService = await sanityClient.fetch(query);
  return cmsService;
};
