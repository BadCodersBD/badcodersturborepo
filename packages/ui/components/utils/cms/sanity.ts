import { createClient } from 'next-sanity'
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "development",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN!,
    useCdn: process.env.NODE_ENV === "development",
}

export const sanityClient = createClient(config);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);
