import type { TwelveColumnGridSpan } from '../components/ui/elements/GridColumn'
import type { Breakpoint } from '../components/ui/foundations/breakpoints'
import type { Theme } from '../components/ui/foundations/theming'

export function getSpanVwCalcForBreakpoint(
    theme: Theme,
    span: Extract<TwelveColumnGridSpan, number>,
    breakpoint: Breakpoint,
) {
    return getSpanVwCalcForGivenValues(
        theme,
        span,
        theme.grid.margin.width[breakpoint],
        theme.grid.gutter.width[breakpoint],
    )
}

/**
 * Using inaccurate margin/gutter widths will lead to an inaccurate calculation.
 */
export function getSpanVwCalcForGivenValues(
    theme: Theme,
    span: Extract<TwelveColumnGridSpan, number>,
    marginWidth: number,
    gutterWidth: number,
) {
    const margins = marginWidth * 2

    if (span === 12) {
        return `min(calc(100vw - ${margins}px), ${theme.grid.container.maxWidth}px)`
    }

    const spanVw = Math.round((span / 12) * 100)
    const spanAtMaxContainerWidthPx = Math.round((span / 12) * theme.grid.container.maxWidth)

    const gutterDeductions = Math.round(((12 - span) / 12) * gutterWidth)

    return `min(calc(${spanVw}vw - ${margins + gutterDeductions}px), ${spanAtMaxContainerWidthPx - gutterDeductions}px)`
}
