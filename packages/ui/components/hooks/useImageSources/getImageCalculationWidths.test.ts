import { expect } from '@jest/globals';
import { mockTheme } from '../../foundations/theming/ThemeProvider.mock'
import { getImageCalculationWidths } from './getImageCalculationWidths'

describe('getImageCalculationWidths', () => {
    it('returns expected values', () => {
        const actual = getImageCalculationWidths(mockTheme)

        expect(actual).toEqual({
            xs: {
                fullWidths: [320],
                containerWidths: [272],
            },
            sm: {
                fullWidths: [375],
                containerWidths: [311],
            },
            md: {
                fullWidths: [768],
                containerWidths: [688],
            },
            lg: {
                fullWidths: [1024, 1232],
                containerWidths: [928, 1128],
            },
            xl: {
                fullWidths: [1440, 1680, 1920],
                containerWidths: [1328, 1432, 1536],
            },
        })
    })

    it('returns the same values for the same theme', () => {
        const actual1 = getImageCalculationWidths(mockTheme)
        const actual2 = getImageCalculationWidths({ ...mockTheme })

        expect(actual2).toBe(actual1)
    })

    it('returns different values for different themes', () => {
        const actual1 = getImageCalculationWidths(mockTheme)
        const actual2 = getImageCalculationWidths({ ...mockTheme, key: 'anotherTheme' })

        expect(actual2).not.toBe(actual1)
    })
})
