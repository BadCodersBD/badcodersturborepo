import type { Breakpoint, BreakpointSpecific } from '../../foundations/breakpoints'
import type { Theme } from '../../foundations/theming'

export type ImageCalculationWidths = {
    fullWidths: [number, ...Array<number>]
    containerWidths: [number, ...Array<number>]
}

const imageCalculationWidths: Record<string, Required<BreakpointSpecific<ImageCalculationWidths>>> = {}

/**
 * These are explicitly 1 DPR widths. We should handle >1 DPR displays in more specific code.
 */
export function getImageCalculationWidths(theme: Theme) {
    if (imageCalculationWidths[theme.key]) return imageCalculationWidths[theme.key]

    function calculateContainerWidth(breakpoint: Breakpoint, overrideWidth?: number) {
        const fullWidth = overrideWidth ?? theme.breakpoints.values[breakpoint]
        return Math.min(fullWidth - theme.grid.margin.width[breakpoint] * 2, theme.grid.container.maxWidth)
    }

    imageCalculationWidths[theme.key] = {
        xs: {
            fullWidths: [theme.grid.site.minWidth],
            containerWidths: [calculateContainerWidth('xs', theme.grid.site.minWidth)],
        },

        sm: {
            fullWidths: [theme.breakpoints.values.sm],
            containerWidths: [calculateContainerWidth('sm')],
        },

        md: {
            fullWidths: [theme.breakpoints.values.md],
            containerWidths: [calculateContainerWidth('md')],
        },

        // The jump between "lg" and "xl" is expected to be quite large so we include a width in between.
        lg: {
            fullWidths: [theme.breakpoints.values.lg, (theme.breakpoints.values.lg + theme.breakpoints.values.xl) / 2],
            containerWidths: [
                calculateContainerWidth('lg'),
                (calculateContainerWidth('lg') + calculateContainerWidth('xl')) / 2,
            ],
        },

        // The jump between "xl" and "site max width" is expected to be quite large so we include a width in between.
        xl: {
            fullWidths: [
                theme.breakpoints.values.xl,
                (theme.breakpoints.values.xl + theme.grid.site.maxWidth) / 2,
                theme.grid.site.maxWidth,
            ],
            containerWidths: [
                calculateContainerWidth('xl'),
                (calculateContainerWidth('xl') + calculateContainerWidth('xl', theme.grid.site.maxWidth)) / 2,
                calculateContainerWidth('xl', theme.grid.site.maxWidth),
            ],
        },
    }

    return imageCalculationWidths[theme.key]
}
