import type { BreakpointSpecific } from './breakpoints'

const marginWidth: Required<BreakpointSpecific<number>> = {
    xs: 24,
    sm: 24,
    md: 48,
    lg: 48,
    xl: 48,
}

const gutterWidth: Required<BreakpointSpecific<number>> = {
    xs: 24,
    sm: 24,
    md: 48,
    lg: 24,
    xl: 24,
}

const spacingBaseValue = 16

const spacingFactors = [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] as const

type SpacingFactor = typeof spacingFactors[number]

const marginSpacing: Required<BreakpointSpecific<SpacingFactor>> = {
    xs: (marginWidth.xs / spacingBaseValue) as SpacingFactor,
    sm: (marginWidth.sm / spacingBaseValue) as SpacingFactor,
    md: (marginWidth.md / spacingBaseValue) as SpacingFactor,
    lg: (marginWidth.lg / spacingBaseValue) as SpacingFactor,
    xl: (marginWidth.xl / spacingBaseValue) as SpacingFactor,
}

const gutterSpacing: Required<BreakpointSpecific<SpacingFactor>> = {
    xs: (gutterWidth.xs / spacingBaseValue) as SpacingFactor,
    sm: (gutterWidth.sm / spacingBaseValue) as SpacingFactor,
    md: (gutterWidth.md / spacingBaseValue) as SpacingFactor,
    lg: (gutterWidth.lg / spacingBaseValue) as SpacingFactor,
    xl: (gutterWidth.xl / spacingBaseValue) as SpacingFactor,
}

export const grid = {
    site: {
        minWidth: 320,
        maxWidth: 1920,
    },
    container: {
        maxWidth: 1224,
    },
    margin: {
        spacing: marginSpacing,
        width: marginWidth,
    },
    gutter: {
        spacing: gutterSpacing,
        width: gutterWidth,
    },
}
