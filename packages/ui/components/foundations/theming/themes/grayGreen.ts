import { baseTheme, createTheme } from '../theming'
import { grayFamily } from './families/grayFamily'

export const grayGreen = createTheme(grayFamily, {
  key: 'grayGreen',
  elements: {
    heading: { color: baseTheme.colors.primary.green },
  }
})
