import { baseTheme, createTheme } from '../theming'
import { darkFamily } from './families/darkFamily'

export const primaryYellow = createTheme(darkFamily, {
    key: 'primaryYellow',
    body: {
        background: { color: baseTheme.colors.primary.yellow },
    }
})
