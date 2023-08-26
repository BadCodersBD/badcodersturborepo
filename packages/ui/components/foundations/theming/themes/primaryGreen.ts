import { baseTheme, createTheme } from '../theming'
import { darkFamily } from './families/darkFamily'

export const primaryGreen = createTheme(darkFamily, {
    key: 'primaryGreen',
    body: {
        background: { color: baseTheme.colors.primary.green },
    }
})
