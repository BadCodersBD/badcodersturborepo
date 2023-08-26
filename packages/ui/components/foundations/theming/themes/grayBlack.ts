import { baseTheme, createTheme } from '../theming'
import { grayFamily } from './families/grayFamily'

export const grayBlack = createTheme(grayFamily, {
  key: 'grayBlack',
  elements: {
    heading: { color: baseTheme.colors.neutrals.black },
  },
})
