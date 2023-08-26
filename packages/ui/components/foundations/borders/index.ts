export const borders = {
    widths: {
        /** Hairline in px unit to prevent zooming issues. */
        sm: '0.063rem',
        md: '0.125rem',
        lg: '0.1875rem',
        xl: '0.25rem',
    },
    radii: {
        /** To reset a set border radius. */
        none: 0,
        /** To create extra small rounded corners. */
        xs: '0.125rem',
        /** To create small rounded corners. */
        sm: '0.25rem',
        /** To create medium rounded corners, seen most commonly throughout the designs. */
        md: '0.625rem',
        /** To create a circular shape; either a circle or an oval. */
        round: '50%',
        /** To create a pill shape. */
        pill: '999rem',
        /** To create an arch (aka tombstone) shape with squared bottom corners. (Having rounded bottom corners requires a custom top radius depending on the width of the element, to prevent it from pushing the rounded bottom corners out.) */
        arch: '999rem 999rem 0 0',
    },
}

export type BorderRadii = keyof typeof borders.radii
