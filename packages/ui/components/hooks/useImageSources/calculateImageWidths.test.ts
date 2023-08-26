import { expect, jest, test } from '@jest/globals';

jest.mock('./getImageCalculationWidths', () => ({
    getImageCalculationWidths: jest.fn(() => ({
        xs: {
            fullWidths: [320],
            containerWidths: [272],
        },
        lg: {
            fullWidths: [1024, 1232],
            containerWidths: [928, 1076],
        },
        xl: {
            fullWidths: [1440, 1680, 1920],
            containerWidths: [1344, 1440, 1536],
        },
    })),
}))

describe('calculateImageWidths', () => {
    test.only("my only true test", () => {
        expect(1 + 1).toEqual(2);
    });
})
