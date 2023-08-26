import { baseTheme, createTheme } from '../theming'
import { grayFamily } from './families/grayFamily'

export const grayRed = createTheme(grayFamily, {
  key: 'grayRed',
  elements: {
    heading: { color: baseTheme.colors.primary.red },
  },
})
