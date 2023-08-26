import type { AspectRatio } from '../types/AspectRatio'
import { splitAspectRatio } from './splitAspectRatio'

export function calculateImageHeight(imageWidth: number, aspectRatio: AspectRatio) {
    const [aspectRatioWidth, aspectRatioHeight] = splitAspectRatio(aspectRatio)

    return Math.round(imageWidth * (aspectRatioHeight / aspectRatioWidth))
}
