import type { ExtendedTheme } from '../../theming';
import { baseTheme } from '../../theming'
import { buttonThemeForLightBackground } from '../elements/button'
import { linkThemeForLightBackground } from '../elements/link'

export const whiteFamily: ExtendedTheme = {
  key: 'whiteFamily',
  body: {
    background: { color: baseTheme.colors.neutrals.black },
    discount: { color: baseTheme.colors.primary.blue },
    error: { color: baseTheme.colors.primary.red },
    text: { color: baseTheme.colors.neutrals.white },
  },
  elements: {
    button: buttonThemeForLightBackground,
    heading: { color: baseTheme.colors.neutrals.black },
    link: linkThemeForLightBackground,
  }
}
