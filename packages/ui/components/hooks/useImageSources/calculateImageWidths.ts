import type { Breakpoint } from '../../foundations/breakpoints'
import type { Theme } from '../../foundations/theming'

export function calculateImageWidths(
    theme: Theme,
    breakpoint: Breakpoint,
) {
    const span = 10;

    return [1344, 1440, 1536].map((containerWidth) => {
        const gutterDeductions = ((12 - span) / 12) * theme.grid.gutter.width[breakpoint]

        return Math.round((containerWidth / 12) * span - gutterDeductions)
    })
}
