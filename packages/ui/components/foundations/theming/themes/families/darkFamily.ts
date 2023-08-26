import type { ExtendedTheme } from '../../theming';
import { baseTheme } from '../../theming'
import { buttonThemeForDarkBackground } from '../elements/button'
import { linkThemeForDarkBackground } from '../elements/link'

export const darkFamily: ExtendedTheme = {
    key: 'darkFamily',
    body: {
        background: { color: baseTheme.colors.neutrals.black },
        discount: { color: baseTheme.colors.primary.blue },
        error: { color: baseTheme.colors.primary.red },
        text: { color: baseTheme.colors.neutrals.white },
    },
    elements: {
        button: buttonThemeForDarkBackground,
        heading: { color: baseTheme.colors.neutrals.white },
        link: linkThemeForDarkBackground,
    },
}
