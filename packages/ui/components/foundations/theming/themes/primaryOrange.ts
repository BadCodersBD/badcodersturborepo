import { baseTheme, createTheme } from '../theming'
import { darkFamily } from './families/darkFamily'

export const primaryOrange = createTheme(darkFamily, {
    key: 'primaryOrange',
    body: {
        background: { color: baseTheme.colors.primary.orange },
    }
})
