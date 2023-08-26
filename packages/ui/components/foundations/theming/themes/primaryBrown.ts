import { baseTheme, createTheme } from '../theming'
import { darkFamily } from './families/darkFamily'

export const primaryBrown = createTheme(darkFamily, {
    key: 'primaryBrown',
    body: {
        background: { color: baseTheme.colors.primary.brown },
    },
})
