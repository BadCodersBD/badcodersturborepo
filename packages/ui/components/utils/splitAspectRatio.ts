import type { AspectRatio } from '../types/AspectRatio'

export function splitAspectRatio(aspectRatio: AspectRatio) {
    return aspectRatio.split(':').map(Number) as [number, number]
}
