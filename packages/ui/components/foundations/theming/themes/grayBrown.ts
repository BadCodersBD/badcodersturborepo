import { baseTheme, createTheme } from '../theming'
import { grayFamily } from './families/grayFamily'

export const grayBrown = createTheme(grayFamily, {
  key: 'grayBrown',
  elements: {
    heading: { color: baseTheme.colors.primary.brown },
  }
})
