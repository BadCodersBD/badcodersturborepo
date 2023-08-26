import { expect } from '@jest/globals';

describe("Hero test", () => {
    test.only("my only true test", () => {
        expect(1 + 1).toEqual(2);
    });
});
