import type { NextApiRequest, NextApiResponse } from 'next'

import { ALLOW_ROBOTS } from 'ui/components/utils/robots'

const CURRENT_DOMAIN = process.env.CURRENT_DOMAIN ?? ''

if (ALLOW_ROBOTS && !CURRENT_DOMAIN)
    throw new Error('Cannot determine robots.txt content, missing CURRENT_DOMAIN environment variable')

const nonProductionContent = `
User-agent: *
Disallow: /`.trim()

const productionContent = `
User-agent: *
Disallow:
Sitemap: https://${CURRENT_DOMAIN}/sitemap.xml`.trim()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Content-Type', 'text/plain')
    res.send(ALLOW_ROBOTS ? productionContent : nonProductionContent)
}
