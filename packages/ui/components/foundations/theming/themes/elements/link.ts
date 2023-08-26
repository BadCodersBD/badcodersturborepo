import type { LinkTheme } from '../../../../elements/Link'
import { baseTheme } from '../../theming'

export const linkThemeForLightBackground: LinkTheme = {
    variants: {
        primary: {
            default: {
                borderColor: baseTheme.colors.primary.yellow,
                fontColor: baseTheme.colors.primary.brown,
                underlineHeight: baseTheme.borders.widths.md,
            },
            focus: {
                outline: `${baseTheme.borders.widths.md} solid ${baseTheme.colors.neutrals.black}`,
            },
            hover: {
                borderColor: 'transparent',
                fontColor: baseTheme.colors.primary.brown,
            },
            disabled: {
                fontColor: baseTheme.colors.neutrals.platinum,
            },
        },
        secondary: {
            default: {
                borderColor: 'transparent',
                fontColor: baseTheme.colors.neutrals.black,
                underlineHeight: baseTheme.borders.widths.md,
            },
            focus: {
                outline: `${baseTheme.borders.widths.md} solid ${baseTheme.colors.neutrals.black}`,
            },
            hover: {
                borderColor: baseTheme.colors.primary.yellow,
                fontColor: baseTheme.colors.primary.brown,
            },
            disabled: {
                fontColor: baseTheme.colors.neutrals.platinum,
            },
        },
        tertiary: {
            default: {
                borderColor: baseTheme.colors.neutrals.black,
                fontColor: baseTheme.colors.neutrals.black,
                underlineHeight: baseTheme.borders.widths.sm,
            },
            focus: {
                outline: `${baseTheme.borders.widths.md} solid ${baseTheme.colors.neutrals.black}`,
            },
            hover: {
                borderColor: 'transparent',
                fontColor: baseTheme.colors.neutrals.black,
            },
            disabled: {
                fontColor: baseTheme.colors.neutrals.platinum,
            },
        },
    },
}

export const linkThemeForDarkBackground: LinkTheme = {
    variants: {
        primary: {
            default: {
                borderColor: baseTheme.colors.primary.yellow,
                fontColor: baseTheme.colors.neutrals.white,
                underlineHeight: baseTheme.borders.widths.md,
            },
            focus: {
                outline: `${baseTheme.borders.widths.md} solid ${baseTheme.colors.neutrals.white}`,
            },
            hover: {
                borderColor: 'transparent',
                fontColor: baseTheme.colors.neutrals.white,
            },
            disabled: {
                fontColor: baseTheme.colors.neutrals.platinum,
            },
        },
        secondary: {
            default: {
                borderColor: 'transparent',
                fontColor: baseTheme.colors.neutrals.white,
                underlineHeight: baseTheme.borders.widths.md,
            },
            focus: {
                outline: `${baseTheme.borders.widths.md} solid ${baseTheme.colors.neutrals.white}`,
            },
            hover: {
                borderColor: baseTheme.colors.primary.yellow,
                fontColor: baseTheme.colors.neutrals.white,
            },
            disabled: {
                fontColor: baseTheme.colors.neutrals.platinum,
            },
        },
        tertiary: {
            default: {
                borderColor: baseTheme.colors.neutrals.white,
                fontColor: baseTheme.colors.neutrals.white,
                underlineHeight: baseTheme.borders.widths.sm,
            },
            focus: {
                outline: `${baseTheme.borders.widths.md} solid ${baseTheme.colors.neutrals.white}`,
            },
            hover: {
                borderColor: 'transparent',
                fontColor: baseTheme.colors.neutrals.white,
            },
            disabled: {
                fontColor: baseTheme.colors.neutrals.platinum,
            },
        },
    },
}

export const linkThemeForVibrantBackground: LinkTheme = {
    variants: {
        primary: {
            default: {
                borderColor: baseTheme.colors.primary.brown,
                fontColor: baseTheme.colors.primary.brown,
                underlineHeight: baseTheme.borders.widths.md,
            },
            focus: {
                outline: `${baseTheme.borders.widths.md} solid ${baseTheme.colors.neutrals.black}`,
            },
            hover: {
                borderColor: 'transparent',
                fontColor: baseTheme.colors.primary.brown,
            },
            disabled: {
                fontColor: baseTheme.colors.neutrals.silver,
            },
        },
        secondary: {
            default: {
                borderColor: 'transparent',
                fontColor: baseTheme.colors.neutrals.black,
                underlineHeight: baseTheme.borders.widths.md,
            },
            focus: {
                outline: `${baseTheme.borders.widths.md} solid ${baseTheme.colors.neutrals.black}`,
            },
            hover: {
                borderColor: baseTheme.colors.primary.brown,
                fontColor: baseTheme.colors.primary.brown,
            },
            disabled: {
                fontColor: baseTheme.colors.neutrals.silver,
            },
        },
        tertiary: {
            default: {
                borderColor: 'transparent',
                fontColor: baseTheme.colors.neutrals.black,
                underlineHeight: baseTheme.borders.widths.sm,
            },
            focus: {
                outline: `${baseTheme.borders.widths.md} solid ${baseTheme.colors.neutrals.black}`,
            },
            hover: {
                borderColor: baseTheme.colors.primary.brown,
                fontColor: baseTheme.colors.primary.brown,
            },
            disabled: {
                fontColor: baseTheme.colors.neutrals.silver,
            },
        },
    },
}

/**
 * Note: This alternative is needed for some themes due to a11y requirements.
 */
export const linkThemeForVibrantAlternativeBackground: LinkTheme = {
    variants: {
        primary: {
            ...linkThemeForVibrantBackground.variants.primary,
            default: {
                borderColor: baseTheme.colors.neutrals.black,
                fontColor: baseTheme.colors.neutrals.black,
                underlineHeight: baseTheme.borders.widths.md,
            },
            hover: {
                borderColor: 'transparent',
                fontColor: baseTheme.colors.neutrals.black,
            },
        },
        secondary: {
            default: {
                borderColor: 'transparent',
                fontColor: baseTheme.colors.neutrals.black,
                underlineHeight: baseTheme.borders.widths.md,
            },
            focus: {
                outline: `${baseTheme.borders.widths.md} solid ${baseTheme.colors.neutrals.black}`,
            },
            hover: {
                borderColor: baseTheme.colors.neutrals.black,
                fontColor: baseTheme.colors.neutrals.black,
            },
            disabled: {
                fontColor: baseTheme.colors.neutrals.silver,
            },
        },
        tertiary: {
            default: {
                borderColor: 'transparent',
                fontColor: baseTheme.colors.neutrals.black,
                underlineHeight: baseTheme.borders.widths.sm,
            },
            focus: {
                outline: `${baseTheme.borders.widths.md} solid ${baseTheme.colors.neutrals.black}`,
            },
            hover: {
                borderColor: baseTheme.colors.neutrals.black,
                fontColor: baseTheme.colors.neutrals.black,
            },
            disabled: {
                fontColor: baseTheme.colors.neutrals.silver,
            },
        },
    },
}
