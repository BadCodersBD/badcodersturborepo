import { formatImageUrl } from './formatImageUrl'

jest.mock('./calculateImageHeight', () => ({ calculateImageHeight: jest.fn(() => 'HEIGHT') }))

const imageUrl = 'https://example.com/image'
const width = 300
const aspectRatio = '4:3'

describe('formatImageUrl', () => {
    describe('width', () => {
        it('sets "w" param in query string', () => {
            const actual = formatImageUrl(imageUrl, { width })

            expect(actual).toBe('https://example.com/image?$i$=&w=300')
        })
    })

    describe('aspectRatio', () => {
        it('sets "h" param in query string', () => {
            const actual = formatImageUrl(imageUrl, { width, aspectRatio })

            expect(actual).toBe('https://example.com/image?$i$=&w=300&h=HEIGHT&sm=c')
        })
    })

    describe('scaleMode', () => {
        it('omits "sm" param in query string when aspectRatio not set', () => {
            const actual = formatImageUrl(imageUrl, { width, scaleMode: 'crop' })

            expect(actual).toBe('https://example.com/image?$i$=&w=300')
        })

        it('sets "sm" param in query string to a default of "crop" when aspectRatio set and scaleMode not set', () => {
            const actual = formatImageUrl(imageUrl, { width, aspectRatio })

            expect(actual).toBe('https://example.com/image?$i$=&w=300&h=HEIGHT&sm=c')
        })

        it('sets "sm" param in query string when aspectRatio set and scaleMode set to "crop"', () => {
            const actual = formatImageUrl(imageUrl, { width, aspectRatio, scaleMode: 'crop' })

            expect(actual).toBe('https://example.com/image?$i$=&w=300&h=HEIGHT&sm=c')
        })

        it('omits "sm" param in query string when aspectRatio set and scaleMode set to "middle-center"', () => {
            const actual = formatImageUrl(imageUrl, { width, aspectRatio, scaleMode: 'middle-center' })

            expect(actual).toBe('https://example.com/image?$i$=&w=300&h=HEIGHT')
        })
    })

    describe('format', () => {
        it('sets "fmt" param in query string', () => {
            const actual = formatImageUrl(imageUrl, { width, format: 'webp' })

            expect(actual).toBe('https://example.com/image?$i$=&w=300&fmt=webp')
        })
    })
})
