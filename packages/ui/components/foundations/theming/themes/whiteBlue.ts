import { baseTheme, createTheme } from '../theming'
import { whiteFamily } from './families/whiteFamily'

export const whiteBlue = createTheme(whiteFamily, {
  key: 'whiteBlue',
  elements: {
    heading: { color: baseTheme.colors.primary.blue },
  }
})
