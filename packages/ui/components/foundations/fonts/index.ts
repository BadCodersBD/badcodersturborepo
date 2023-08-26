const AllTogetherSansBoldWoff2 = '/fonts/AllTogetherSansW05-Bold.woff2'
const AllTogetherSansRegularWoff2 = '/fonts/AllTogetherSansW05-Regular.woff2'
const AllTogetherSansSemiLightWoff2 = '/fonts/AllTogetherSans-SemiLight.woff2'
const AllTogetherSerifWideBlkWoff2 = '/fonts/AllTogetherSerifW05-WideBlk.woff2'
const AllTogetherSerifCnBoldWoff2 = '/fonts/AllTogetherSerifW05-CnBold.woff2'
const AllTogetherSerifCnLightWoff2 = '/fonts/AllTogetherSerifW05-CnLight.woff2'

type font = {
    fontFamily: string
    fontWeight: number
    fontWeightName: string
    fontFile: string
}

const fontFamilies = {
    sans: '"AllTogetherSans", -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", sans-serif',
    serif: '"AllTogetherSerif", "Times New Roman", Times, serif',
    sansWithoutFallback: 'AllTogetherSans',
    serifWithoutFallback: 'AllTogetherSerif',
}

const fontWeights = {
    light: 300,
    regular: 400,
    bold: 700,
    black: 900,
}

const fontCombinations: Array<font> = [
    {
        fontFamily: fontFamilies.serifWithoutFallback,
        fontWeight: fontWeights.light,
        fontWeightName: 'light',
        fontFile: AllTogetherSerifCnLightWoff2,
    },
    {
        fontFamily: fontFamilies.serifWithoutFallback,
        fontWeight: fontWeights.bold,
        fontWeightName: 'bold',
        fontFile: AllTogetherSerifCnBoldWoff2,
    },
    {
        fontFamily: fontFamilies.serifWithoutFallback,
        fontWeight: fontWeights.black,
        fontWeightName: 'black',
        fontFile: AllTogetherSerifWideBlkWoff2,
    },
    {
        fontFamily: fontFamilies.sansWithoutFallback,
        fontWeight: fontWeights.light,
        fontWeightName: 'light',
        fontFile: AllTogetherSansSemiLightWoff2,
    },
    {
        fontFamily: fontFamilies.sansWithoutFallback,
        fontWeight: fontWeights.regular,
        fontWeightName: 'regular',
        fontFile: AllTogetherSansRegularWoff2,
    },
    {
        fontFamily: fontFamilies.sansWithoutFallback,
        fontWeight: fontWeights.bold,
        fontWeightName: 'bold',
        fontFile: AllTogetherSansBoldWoff2,
    },
]

let fonts = ''

fontCombinations.forEach((value: font) => {
    fonts += `
    @font-face {
      font-family: '${value.fontFamily}';
      font-style: normal;
      font-stretch: normal;
      font-display: swap;
      font-weight: ${value.fontWeight};
      src: url('${value.fontFile}') format('woff2');
    }
  `
})

export { fontCombinations, fontFamilies, fonts, fontWeights }
