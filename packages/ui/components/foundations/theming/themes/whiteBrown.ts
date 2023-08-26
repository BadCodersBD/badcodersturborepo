import { baseTheme, createTheme } from '../theming'
import { whiteFamily } from './families/whiteFamily'

export const whiteBrown = createTheme(whiteFamily, {
  key: 'whiteBrown',
  elements: {
    heading: { color: baseTheme.colors.primary.brown },
  }
})
