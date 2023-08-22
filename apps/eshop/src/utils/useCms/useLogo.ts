import { useState, useEffect } from 'react'
import { sanityClient } from '../sanity'
import { groq } from 'next-sanity'
import type { LogoPropsType } from '../../types/type'

export function useLogo() {
  const [portfolioLogo, setPortfolioLogo] = useState<LogoPropsType[]>([])

  const portfolioQuery = groq`*[_type == "logo"]`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const portfoliologo = await sanityClient.fetch(portfolioQuery)
        setPortfolioLogo(portfoliologo)
      } catch (e) {}
    }
    fetchData()
  }, [portfolioQuery])

  return {
    portfolioLogo,
  }
}
