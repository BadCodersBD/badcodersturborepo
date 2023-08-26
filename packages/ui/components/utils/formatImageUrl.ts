import type { ImageMediaParams } from '../contexts'

import { calculateImageHeight } from './calculateImageHeight'

export function formatImageUrl(imageUrl: string, params: ImageMediaParams) {
    const [path, query] = imageUrl.split('?')
    const url = new URL(path!)
    let search = query ? `${query}&` : ''
    search += new URLSearchParams(buildSearchParams(params)).toString()
    url.search = decodeURIComponent(search)
    return url.toString()
}

function buildSearchParams({ width, aspectRatio, scaleMode, format }: ImageMediaParams) {
    const params: Record<string, string> = {
        [`$i$`]: '', // amplience transformation template for "all images"
        w: `${width}`,
    }

    if (aspectRatio) {
        params.h = `${calculateImageHeight(width, aspectRatio)}`

        const sm = mapScaleMode(scaleMode)

        if (sm) {
            params.sm = sm
        }
    }

    if (format) {
        params.fmt = format
    }

    return params
}

function mapScaleMode(scaleMode: ImageMediaParams['scaleMode'] = 'crop') {
    if (scaleMode === 'middle-center') {
        return undefined // amplience default
    }

    return 'c'
}
