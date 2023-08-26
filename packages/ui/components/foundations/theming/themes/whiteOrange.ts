import { baseTheme, createTheme } from '../theming'
import { whiteFamily } from './families/whiteFamily'

export const whiteOrange = createTheme(whiteFamily, {
  key: 'whiteOrange',
  elements: {
    heading: { color: baseTheme.colors.primary.orange },
  }
})
