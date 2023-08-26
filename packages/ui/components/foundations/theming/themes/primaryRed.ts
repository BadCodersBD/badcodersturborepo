import { baseTheme, createTheme } from '../theming'
import { darkFamily } from './families/darkFamily'

export const primaryRed = createTheme(darkFamily, {
    key: 'primaryRed',
    body: {
        background: { color: baseTheme.colors.primary.red },
        error: { color: baseTheme.colors.tertiary.lightRed },
    }
})
