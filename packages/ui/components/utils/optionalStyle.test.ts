import { optionalStyle } from './optionalStyle'

type Each = {
    value: number | string | undefined
    condition: boolean | undefined
    expected: string
}

describe('optionalStyle', () => {
    it.each`
    value        | condition    | expected
    ${undefined} | ${false}     | ${''}
    ${undefined} | ${true}      | ${''}
    ${undefined} | ${undefined} | ${''}
    ${0}         | ${false}     | ${''}
    ${0}         | ${true}      | ${'0'}
    ${0}         | ${undefined} | ${'0'}
    ${'STRING'}  | ${false}     | ${''}
    ${'STRING'}  | ${true}      | ${'STRING'}
    ${'STRING'}  | ${undefined} | ${'STRING'}
  `(
        'returns "$expected" when value is "$value" and condition is "$condition"',
        ({ value, condition, expected }: Each) => {
            const actual = optionalStyle(value, condition)

            expect(actual).toBe(expected)
        },
    )
})
