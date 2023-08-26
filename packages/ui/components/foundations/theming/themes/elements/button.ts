import type { Property } from 'csstype'

import type { ButtonTheme } from '../../../../elements/Button'
import { fontSizes } from '../../../typography'
import { baseTheme } from '../../theming'

const exceptionColor = {
    darkBrown: '#3e1200',
}

const sizes: ButtonTheme['sizes'] = {
    small: {
        borderWidth: baseTheme.borders.widths.md,
        hoverDropBottom: '0.3125rem',
        hoverDropLeft: '-0.25rem',
        fontSize: fontSizes.bodySmall.mobile.fontSize,
        outlineWidth: baseTheme.borders.widths.md,
        paddingTopBottom: '0.875rem',
        paddingLeftRight: '1.5rem',
    },
    large: {
        borderWidth: baseTheme.borders.widths.md,
        hoverDropBottom: '0.375rem',
        hoverDropLeft: '-0.375rem',
        fontSize: fontSizes.bodyMedium.mobile.fontSize,
        outlineWidth: baseTheme.borders.widths.md,
        paddingTopBottom: '1.25rem',
        paddingLeftRight: '2.5rem',
    },
}

function buildDesignYourOwnTheme(overrideBorderColor?: Property.BorderColor) {
    return {
        default: {
            background: baseTheme.colors.neutrals.white,
            borderColor: overrideBorderColor ?? baseTheme.colors.primary.brown,
            color: baseTheme.colors.primary.brown,
        },
        hover: {
            dropColor:
                'radial-gradient(101.97% 2204.87% at 101.97% 40.83%, #DA418C 0%, #D70100 15.27%, #FF6701 29.33%, #FFD200 43.4%, #00B035 56.42%, #0F79EB 71%, #BE9FFF 84.54%, #DA408F 100%)',
        },
        focus: {
            outlineColor: overrideBorderColor ?? baseTheme.colors.neutrals.black,
        },
        active: {
            borderColor: overrideBorderColor ?? exceptionColor.darkBrown,
            color: exceptionColor.darkBrown,
        },
        disabled: {
            borderColor: baseTheme.colors.neutrals.platinum,
            color: baseTheme.colors.neutrals.platinum,
        },
    }
}

export const buttonThemeForLightBackground: ButtonTheme = {
    sizes,
    variants: {
        primary: {
            default: {
                background: baseTheme.colors.primary.yellow,
                borderColor: baseTheme.colors.primary.yellow,
                color: baseTheme.colors.primary.brown,
            },
            hover: {
                background: baseTheme.colors.primary.yellow,
                color: baseTheme.colors.primary.brown,
                dropColor: baseTheme.colors.primary.brown,
            },
            focus: {
                outlineColor: baseTheme.colors.neutrals.black,
            },
            active: {
                background: baseTheme.colors.primary.brown,
                borderColor: baseTheme.colors.primary.brown,
                color: baseTheme.colors.neutrals.white,
            },
            disabled: {
                background: baseTheme.colors.neutrals.platinum,
                borderColor: baseTheme.colors.neutrals.platinum,
                color: baseTheme.colors.neutrals.white,
            },
        },
        secondary: {
            default: {
                background: 'transparent',
                borderColor: baseTheme.colors.primary.brown,
                color: baseTheme.colors.primary.brown,
            },
            hover: {
                background: baseTheme.colors.neutrals.white,
                dropColor: baseTheme.colors.primary.brown,
            },
            focus: {
                outlineColor: baseTheme.colors.neutrals.black,
            },
            active: {
                background: baseTheme.colors.primary.brown,
                color: baseTheme.colors.neutrals.white,
            },
            disabled: {
                background: 'transparent',
                borderColor: baseTheme.colors.neutrals.platinum,
                color: baseTheme.colors.neutrals.platinum,
            },
        },
        'design-your-own': buildDesignYourOwnTheme(),
    },
}

export const buttonThemeForDarkBackground: ButtonTheme = {
    sizes,
    variants: {
        primary: {
            default: {
                background: baseTheme.colors.neutrals.white,
                borderColor: baseTheme.colors.neutrals.white,
                color: baseTheme.colors.primary.brown,
            },
            hover: {
                background: baseTheme.colors.neutrals.white,
                color: baseTheme.colors.primary.brown,
                dropColor: baseTheme.colors.primary.yellow,
            },
            focus: {
                outlineColor: baseTheme.colors.neutrals.white,
            },
            active: {
                background: exceptionColor.darkBrown,
                borderColor: exceptionColor.darkBrown,
                color: baseTheme.colors.neutrals.white,
            },
            disabled: {
                background: baseTheme.colors.neutrals.platinum,
                borderColor: baseTheme.colors.neutrals.platinum,
                color: baseTheme.colors.neutrals.white,
            },
        },
        secondary: {
            default: {
                background: 'transparent',
                borderColor: baseTheme.colors.neutrals.white,
                color: baseTheme.colors.neutrals.white,
            },
            hover: {
                background: baseTheme.colors.neutrals.white,
                color: baseTheme.colors.primary.brown,
                dropColor: baseTheme.colors.primary.yellow,
            },
            focus: {
                outlineColor: baseTheme.colors.neutrals.white,
            },
            active: {
                background: exceptionColor.darkBrown,
                borderColor: exceptionColor.darkBrown,
                color: baseTheme.colors.neutrals.white,
            },
            disabled: {
                background: 'transparent',
                borderColor: baseTheme.colors.neutrals.platinum,
                color: baseTheme.colors.neutrals.platinum,
            },
        },
        'design-your-own': buildDesignYourOwnTheme(baseTheme.colors.neutrals.white),
    },
}

export const buttonThemeForVibrantBackground: ButtonTheme = {
    sizes,
    variants: {
        primary: {
            default: {
                background: baseTheme.colors.neutrals.white,
                borderColor: baseTheme.colors.neutrals.white,
                color: baseTheme.colors.primary.brown,
            },
            hover: {
                background: baseTheme.colors.neutrals.white,
                color: baseTheme.colors.primary.brown,
                dropColor: baseTheme.colors.primary.brown,
            },
            focus: {
                outlineColor: baseTheme.colors.neutrals.black,
            },
            active: {
                background: baseTheme.colors.primary.brown,
                borderColor: baseTheme.colors.primary.brown,
                color: baseTheme.colors.neutrals.white,
            },
            disabled: {
                background: baseTheme.colors.neutrals.platinum,
                borderColor: baseTheme.colors.neutrals.platinum,
                color: baseTheme.colors.neutrals.white,
            },
        },
        secondary: {
            default: {
                background: 'transparent',
                borderColor: baseTheme.colors.primary.brown,
                color: baseTheme.colors.primary.brown,
            },
            hover: {
                background: baseTheme.colors.neutrals.white,
                color: baseTheme.colors.primary.brown,
                dropColor: baseTheme.colors.primary.brown,
            },
            focus: {
                outlineColor: baseTheme.colors.neutrals.black,
            },
            active: {
                background: baseTheme.colors.primary.brown,
                color: baseTheme.colors.neutrals.white,
            },
            disabled: {
                background: 'transparent',
                borderColor: baseTheme.colors.neutrals.platinum,
                color: baseTheme.colors.neutrals.platinum,
            },
        },
        'design-your-own': buildDesignYourOwnTheme(),
    },
}

/**
 * Note: This alternative is needed for some themes due to a11y requirements.
 */
export const buttonThemeForVibrantAlternativeBackground: ButtonTheme = {
    ...buttonThemeForVibrantBackground,
    variants: {
        primary: buttonThemeForVibrantBackground.variants.primary,
        secondary: {
            ...buttonThemeForVibrantBackground.variants.secondary,
            default: {
                background: 'transparent',
                borderColor: baseTheme.colors.neutrals.black,
                color: baseTheme.colors.neutrals.black,
            },
        },
        'design-your-own': buildDesignYourOwnTheme(),
    },
}
