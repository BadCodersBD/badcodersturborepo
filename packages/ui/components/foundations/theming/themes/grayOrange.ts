import { baseTheme, createTheme } from '../theming'
import { grayFamily } from './families/grayFamily'

export const grayOrange = createTheme(grayFamily, {
  key: 'grayOrange',
  elements: {
    heading: { color: baseTheme.colors.primary.orange },
  },
})
