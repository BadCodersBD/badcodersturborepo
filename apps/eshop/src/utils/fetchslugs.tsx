import { groq } from 'next-sanity'
import { sanityClient } from './sanity'


export const fetchCarsSlugs = async () => {
    const query = groq`*[_type == "services"]{slug{current}}`
  
    const cmsNewsslugs = await sanityClient.fetch(query)
    return cmsNewsslugs
  }

  export const fetchOpenpositionsSlugs = async () => {
    const query = groq`*[_type == "openpositions"]{slug{current}}`
  
    const cmsOpenpositionslugs = await sanityClient.fetch(query)
    return cmsOpenpositionslugs
  }
