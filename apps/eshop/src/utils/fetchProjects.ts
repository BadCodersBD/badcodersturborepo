import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "project"]`;

export const fetchProjects = async () => {
  const cmsProjects = await sanityClient.fetch(query);
  return cmsProjects;
};
