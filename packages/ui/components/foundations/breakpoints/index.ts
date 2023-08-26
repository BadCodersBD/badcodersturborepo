import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react'
import type { Breakpoint as MuiBreakpoint } from '@mui/material/styles'
import type { Theme } from '../theming'

export type Breakpoint = MuiBreakpoint

export const breakpoints = {
  values: {
    xs: 0,
    sm: 375,
    md: 768,
    lg: 1024,
    xl: 1440,
  },
}
export const orderedBreakpoints = ['xs', 'sm', 'md', 'lg', 'xl'] as const
export const smallestBreakpoint = orderedBreakpoints[0]

export type BreakpointSpecific<T4ColumnGrid = unknown, T12ColumnGrid = T4ColumnGrid> = {
  xs: T4ColumnGrid
  sm?: T4ColumnGrid
  md?: T4ColumnGrid
  lg?: T12ColumnGrid
  xl?: T12ColumnGrid
}

export function getBreakpointStyles(theme: Theme, callback: (breakpoint: Breakpoint) => SerializedStyles | null) {
  return orderedBreakpoints.reduce((styles, breakpoint) => {
    const breakpointStyles = callback(breakpoint)

    if (!breakpointStyles) return styles

    if (breakpoint === smallestBreakpoint) {
      return css`
        ${styles}
        ${breakpointStyles}
      `
    }

    return css`
      ${styles}
      ${theme.breakpoints.up(breakpoint)} {
        ${breakpointStyles}
      }
    `
  }, css``)
}
