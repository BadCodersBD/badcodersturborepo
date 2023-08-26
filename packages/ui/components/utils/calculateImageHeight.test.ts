import type { AspectRatio } from '../../types/AspectRatio'

import { calculateImageHeight } from './calculateImageHeight'

describe('calculateImageHeight', () => {
    it.each([
        ['1:1' as AspectRatio, 1000, 1000],
        ['4:3' as AspectRatio, 1200, 900],
        ['16:9' as AspectRatio, 1600, 900],
    ])('returns expected height (%s)', (aspectRatio: string, width: number, expectedHeight: unknown) => {
        const actual = calculateImageHeight(width, aspectRatio)

        expect(actual).toBe(expectedHeight)
    })
})
