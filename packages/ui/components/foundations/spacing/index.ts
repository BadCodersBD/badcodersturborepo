import { css } from '@emotion/react'

import type { BreakpointSpecific } from '../breakpoints';
import { getBreakpointStyles, smallestBreakpoint } from '../breakpoints'
import type { Theme } from '../theming'

export const spacingBaseValue = 16

export const spacingFactors = [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] as const

export type SpacingFactor = typeof spacingFactors[number]

export type CustomSpacing = {
    (): string
    (value: SpacingFactor): string
    (topBottom: SpacingFactor, rightLeft: SpacingFactor): string
    (top: SpacingFactor, rightLeft: SpacingFactor, bottom: SpacingFactor): string
    (top: SpacingFactor, right: SpacingFactor, bottom: SpacingFactor, left: SpacingFactor): string
}

export function spacing(factor: number) {
    return factor === 0 ? '0' : `${factor}rem`
}

export type WithSpacing<T> = T & {
    /** If set, adds margin-bottom of the specified spacing. */
    spacingBottom?: SpacingFactor | Partial<BreakpointSpecific<SpacingFactor>>
    /** If set, adds margin-top of the specified spacing. */
    spacingTop?: SpacingFactor | Partial<BreakpointSpecific<SpacingFactor>>
}
export const spacingProps = ['spacingBottom', 'spacingTop'] as const
export type SpacingProps = typeof spacingProps[number]

export function getSpacingStyles(theme: Theme, { spacingBottom, spacingTop }: WithSpacing<unknown>) {
    const bottomObj = typeof spacingBottom === 'number' ? { [smallestBreakpoint]: spacingBottom } : spacingBottom
    const topObj = typeof spacingTop === 'number' ? { [smallestBreakpoint]: spacingTop } : spacingTop

    return getBreakpointStyles(theme, (breakpoint) => {
        const bottom = bottomObj?.[breakpoint]
        const top = topObj?.[breakpoint]

        if (!bottom && !top) return null

        return css`
      margin-bottom: ${bottom && theme.spacing(bottom)};
      margin-top: ${top && theme.spacing(top)};
    `
    })
}
