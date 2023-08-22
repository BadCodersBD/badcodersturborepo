import { createClient } from 'next-sanity'
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
    dataset: "production",
    projectId: "q9zachhr",
    apiVersion: "2023-08-22",
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN!,
    useCdn: process.env.NODE_ENV === "production",
}

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);
