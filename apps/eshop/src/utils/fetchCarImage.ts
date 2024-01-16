import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "carimageschema"]`;

export const fetchCar = async () => {
	const cmsCarImage = await sanityClient.fetch(query);
	return cmsCarImage;
};
