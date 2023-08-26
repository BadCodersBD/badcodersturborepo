import { baseTheme, createTheme } from '../theming'
import { whiteFamily } from './families/whiteFamily'

export const whiteGreen = createTheme(whiteFamily, {
  key: 'whiteGreen',
  elements: {
    heading: { color: baseTheme.colors.primary.green },
  },
})
