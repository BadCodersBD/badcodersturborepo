// pages/api/sitemap.xml.tsx

import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchCarsSlugs } from '../../utils/fetchslugs';

const homepage = 'https://www.beachlimofl.com';

const generateSitemap = (urls: any) => {
    const sitemapContent = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!-- Your sitemap entries based on the fetched data -->
        <url>
          <loc>${homepage}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
        <url>
          <loc>${homepage}/allproductslist</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
        <url>
          <loc>${homepage}/brands</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
        <url>
          <loc>${homepage}/contact-us</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
        ${urls
          .map(
            (url: any) => `
        <url>
          <loc>${homepage}/${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
          `,
          )
          .join('')}
      </urlset>
    `;
  
    return sitemapContent.trim(); // Trim to remove leading/trailing whitespaces
  };

  const sitemapHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const slugs = await fetchCarsSlugs();
  
      // Check if slugs is not null or undefined
      if (!slugs || slugs.length === 0) {
        console.error('No slugs fetched');
        res.status(500).end('Internal Server Error');
        return;
      }
  
      const urls = slugs?.map((item: any) => item?.slug.current) || [];
      const sitemapContent = generateSitemap(urls);
  
      res.setHeader('Content-Type', 'text/xml');
      res.status(200).send(sitemapContent);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).end('Internal Server Error');
    }
  };
  
  export default sitemapHandler;
