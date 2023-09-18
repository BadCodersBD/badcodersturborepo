import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "payment"]`;

export const fetchPaymentIcon = async () => {
  const cmsPaymenticon = await sanityClient.fetch(query);
  return cmsPaymenticon;
};