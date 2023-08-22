import { sanityClient } from './sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const urlForThumbnail = (source: string) => {
  return createImageUrlBuilder(sanityClient).image(source).url()
}
