import { baseTheme, createTheme } from '../theming'
import { whiteFamily } from './families/whiteFamily'

export const whiteRed = createTheme(whiteFamily, {
  key: 'whiteRed',
  elements: {
    heading: { color: baseTheme.colors.primary.red },
  },
})
