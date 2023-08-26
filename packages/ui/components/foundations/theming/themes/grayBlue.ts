import { baseTheme, createTheme } from '../theming'
import { grayFamily } from './families/grayFamily'

export const grayBlue = createTheme(grayFamily, {
  key: 'grayBlue',
  elements: {
    heading: { color: baseTheme.colors.primary.blue },
  }
})
