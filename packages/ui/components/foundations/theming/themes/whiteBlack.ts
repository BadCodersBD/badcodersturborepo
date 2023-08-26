import { baseTheme, createTheme } from '../theming'
import { whiteFamily } from './families/whiteFamily'

export const whiteBlack = createTheme(whiteFamily, {
  key: 'whiteBlack',
  elements: {
    heading: { color: baseTheme.colors.neutrals.black },
  }
})
