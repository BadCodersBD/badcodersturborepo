import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "skill"]`;

export const fetchSkill = async () => {
  const cmsProjects = await sanityClient.fetch(query);
  return cmsProjects;
};