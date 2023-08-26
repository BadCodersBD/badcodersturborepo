import { createTheme } from '@mui/material'
import type { TypographyOptions } from '@mui/material/styles/createTypography'
import type { Property } from 'csstype'
import type { CSSProperties } from 'react'

import { breakpoints } from '../breakpoints'
import { fontFamilies, fontWeights } from '../fonts'

const theme = createTheme({ breakpoints })

export type CustomTypography = {
    h1WideBlackSerif: CSSProperties
    h1BigBoldSerif: CSSProperties
    h1BigLightSerif: CSSProperties
    h1BoldSerif: CSSProperties
    h1LightSerif: CSSProperties
    h2BoldSerif: CSSProperties
    h2LightSerif: CSSProperties
    h3BoldSerif: CSSProperties
    h3Sans: CSSProperties
    h4BoldSerif: CSSProperties
    h4LightSerif: CSSProperties
    h4Sans: CSSProperties
    h5LightSerif: CSSProperties
    h5BoldSerif: CSSProperties
    h5Sans: CSSProperties
    h6BoldSerif: CSSProperties
    h6BoldSans: CSSProperties
    bodyLarge: CSSProperties
    bodyMedium: CSSProperties
    bodyMediumBoldSans: CSSProperties
    bodySmall: CSSProperties
    bodySmallBoldSans: CSSProperties
    bodyExtraSmall: CSSProperties
    bodyExtraSmallBoldSerif: CSSProperties
    bodyExtraSmallBoldSans: CSSProperties
    bodyExtraExtraSmallBoldSans: CSSProperties
}

/* Custom added typography variants. */
declare module '@mui/material/styles' {
    interface TypographyVariants extends CustomTypography {
        fontWeightBlack: Property.FontWeight
    }

    interface TypographyVariantsOptions extends Partial<CustomTypography> {
        fontWeightBlack?: Property.FontWeight
    }
}

/* Overrides with custom added typography variants and disabled MUI defaults. */
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        fontWeightMedium: false
        fontWeightBlack: true
        h1WideBlackSerif: true
        h1BigBoldSerif: true
        h1BigLightSerif: true
        h1BoldSerif: true
        h1LightSerif: true
        h2BoldSerif: true
        h2LightSerif: true
        h3BoldSerif: true
        h3Sans: true
        h4BoldSerif: true
        h4LightSerif: true
        h4Sans: true
        h5LightSerif: true
        h5BoldSerif: true
        h5Sans: true
        h6BoldSerif: true
        h6BoldSans: true
        bodyLarge: true
        bodyMedium: true
        bodyMediumBoldSans: true
        bodySmall: true
        bodySmallBoldSans: true
        bodyExtraSmall: true
        bodyExtraSmallBoldSerif: true
        bodyExtraSmallBoldSans: true
        bodyExtraExtraSmallBoldSans: true
        h1: false
        h2: false
        h3: false
        h4: false
        h5: false
        h6: false
        body1: false
        body2: false
        button: false
        overline: false
    }
}

export const fontSizes = {
    h1Wide: {
        mobile: {
            fontSize: '2rem', // 32px
            lineHeight: 40 / 32, // 40px
        },
        desktop: {
            fontSize: '3.5rem', // 56px
            lineHeight: 64 / 56, // 64px
        },
    },
    h1Big: {
        mobile: {
            fontSize: '3rem', // 48px
            lineHeight: 56 / 48, // 56px
        },
        desktop: {
            fontSize: '3.5rem', // 56px
            lineHeight: 64 / 56, // 64px
        },
    },
    h1: {
        mobile: {
            fontSize: '2.5rem', // 40px
            lineHeight: 46 / 40, // 46px
        },
        desktop: {
            fontSize: '3rem', // 48px
            lineHeight: 56 / 48, // 56px
        },
    },
    h2: {
        mobile: {
            fontSize: '2.25rem', // 36px
            lineHeight: 40 / 36, // 40px
        },
        desktop: {
            fontSize: '2.75rem', // 44px
            lineHeight: 52 / 44, // 52px
        },
    },
    h3: {
        mobile: {
            fontSize: '1.875rem', // 30px
            lineHeight: 36 / 30, // 36px
        },
        desktop: {
            fontSize: '2.25rem', // 36px
            lineHeight: 40 / 36, // 40px
        },
    },
    h4: {
        mobile: {
            fontSize: '1.5rem', // 24px
            lineHeight: 30 / 24, // 30px
        },
    },
    h5: {
        mobile: {
            fontSize: '1.125rem', // 18px
            lineHeight: 24 / 18, // 24px
        },
    },
    h6: {
        mobile: {
            fontSize: '1rem', // 16px
            lineHeight: 20 / 16, // 20px
        },
    },
    bodyLarge: {
        mobile: {
            fontSize: '1.125rem', // 18px
            lineHeight: 30 / 18, // 30px
        },
    },
    bodyMedium: {
        mobile: {
            fontSize: '1rem', // 16px
            lineHeight: 26 / 16, // 26px
        },
    },
    bodySmall: {
        mobile: {
            fontSize: '0.875rem', // 14px
            lineHeight: 24 / 14, // 24px
        },
    },
    bodySmallCompact: {
        mobile: {
            fontSize: '0.875rem', // 14px
            lineHeight: 18 / 14, // 18px
        },
    },
    bodyExtraSmall: {
        mobile: {
            fontSize: '0.75rem', // 12px
            lineHeight: 18 / 12, // 18px
        },
    },
    bodyExtraSmallCompact: {
        mobile: {
            fontSize: '0.75rem', // 12px
            lineHeight: 16 / 12, // 16px
        },
    },
    bodyExtraExtraSmall: {
        mobile: {
            fontSize: '0.625rem', // 10px
            lineHeight: 14 / 10, // 14px
        },
    },
}

export const typography: TypographyOptions = {
    fontWeightLight: fontWeights.light,
    fontWeightRegular: fontWeights.regular,
    fontWeightMedium: undefined, // Unused MUI default
    fontWeightBold: fontWeights.bold,
    fontWeightBlack: fontWeights.black,
    h1WideBlackSerif: {
        fontFamily: fontFamilies.serif,
        fontWeight: fontWeights.black,
        fontSize: fontSizes.h1Wide.mobile.fontSize,
        lineHeight: fontSizes.h1Wide.mobile.lineHeight,
        [theme.breakpoints.up('lg')]: {
            fontSize: fontSizes.h1Wide.desktop.fontSize,
            lineHeight: fontSizes.h1Wide.desktop.lineHeight,
        },
    },
    h1BigBoldSerif: {
        fontFamily: fontFamilies.serif,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.h1Big.mobile.fontSize,
        lineHeight: fontSizes.h1Big.mobile.lineHeight,
        [theme.breakpoints.up('lg')]: {
            fontSize: fontSizes.h1Big.desktop.fontSize,
            lineHeight: fontSizes.h1Big.desktop.lineHeight,
        },
    },
    h1BigLightSerif: {
        fontFamily: fontFamilies.serif,
        fontWeight: fontWeights.light,
        fontSize: fontSizes.h1Big.mobile.fontSize,
        lineHeight: fontSizes.h1Big.mobile.lineHeight,
        [theme.breakpoints.up('lg')]: {
            fontSize: fontSizes.h1Big.desktop.fontSize,
            lineHeight: fontSizes.h1Big.desktop.lineHeight,
        },
    },
    h1BoldSerif: {
        fontFamily: fontFamilies.serif,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.h1.mobile.fontSize,
        lineHeight: fontSizes.h1.mobile.lineHeight,
        [theme.breakpoints.up('lg')]: {
            fontSize: fontSizes.h1.desktop.fontSize,
            lineHeight: fontSizes.h1.desktop.lineHeight,
        },
    },
    h1LightSerif: {
        fontFamily: fontFamilies.serif,
        fontWeight: fontWeights.light,
        fontSize: fontSizes.h1.mobile.fontSize,
        lineHeight: fontSizes.h1.mobile.lineHeight,
        [theme.breakpoints.up('lg')]: {
            fontSize: fontSizes.h1.desktop.fontSize,
            lineHeight: fontSizes.h1.desktop.lineHeight,
        },
    },
    h2BoldSerif: {
        fontFamily: fontFamilies.serif,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.h2.mobile.fontSize,
        lineHeight: fontSizes.h2.mobile.lineHeight,
        [theme.breakpoints.up('lg')]: {
            fontSize: fontSizes.h2.desktop.fontSize,
            lineHeight: fontSizes.h2.desktop.lineHeight,
        },
    },
    h2LightSerif: {
        fontFamily: fontFamilies.serif,
        fontWeight: fontWeights.light,
        fontSize: fontSizes.h2.mobile.fontSize,
        lineHeight: fontSizes.h2.mobile.lineHeight,
        [theme.breakpoints.up('lg')]: {
            fontSize: fontSizes.h2.desktop.fontSize,
            lineHeight: fontSizes.h2.desktop.lineHeight,
        },
    },
    h3BoldSerif: {
        fontFamily: fontFamilies.serif,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.h3.mobile.fontSize,
        lineHeight: fontSizes.h3.mobile.lineHeight,
        [theme.breakpoints.up('lg')]: {
            fontSize: fontSizes.h3.desktop.fontSize,
            lineHeight: fontSizes.h3.desktop.lineHeight,
        },
    },
    h3Sans: {
        fontFamily: fontFamilies.sans,
        fontWeight: fontWeights.regular,
        fontSize: fontSizes.h3.mobile.fontSize,
        lineHeight: fontSizes.h3.mobile.lineHeight,
        [theme.breakpoints.up('lg')]: {
            fontSize: fontSizes.h3.desktop.fontSize,
            lineHeight: fontSizes.h3.desktop.lineHeight,
        },
    },
    h4BoldSerif: {
        fontFamily: fontFamilies.serif,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.h4.mobile.fontSize,
        lineHeight: fontSizes.h4.mobile.lineHeight,
    },
    h4LightSerif: {
        fontFamily: fontFamilies.serif,
        fontWeight: fontWeights.light,
        fontSize: fontSizes.h4.mobile.fontSize,
        lineHeight: fontSizes.h4.mobile.lineHeight,
    },
    h4Sans: {
        fontFamily: fontFamilies.sans,
        fontWeight: fontWeights.regular,
        fontSize: fontSizes.h4.mobile.fontSize,
        lineHeight: fontSizes.h4.mobile.lineHeight,
    },
    h5LightSerif: {
        fontFamily: fontFamilies.serif,
        fontWeight: fontWeights.light,
        fontSize: fontSizes.h5.mobile.fontSize,
        lineHeight: fontSizes.h5.mobile.lineHeight,
    },
    h5BoldSerif: {
        fontFamily: fontFamilies.serif,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.h5.mobile.fontSize,
        lineHeight: fontSizes.h5.mobile.lineHeight,
    },
    h5Sans: {
        fontFamily: fontFamilies.sans,
        fontWeight: fontWeights.regular,
        fontSize: fontSizes.h5.mobile.fontSize,
        lineHeight: fontSizes.h5.mobile.lineHeight,
    },
    h6BoldSerif: {
        fontFamily: fontFamilies.serif,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.h6.mobile.fontSize,
        lineHeight: fontSizes.h6.mobile.lineHeight,
    },
    h6BoldSans: {
        fontFamily: fontFamilies.sans,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.h6.mobile.fontSize,
        lineHeight: fontSizes.h6.mobile.lineHeight,
    },
    /** AKA P-Large in design library */
    bodyLarge: {
        fontFamily: fontFamilies.sans,
        fontWeight: fontWeights.light,
        fontSize: fontSizes.bodyLarge.mobile.fontSize,
        lineHeight: fontSizes.bodyLarge.mobile.lineHeight,
        letterSpacing: '0',
    },
    /** AKA P-Default in design library */
    bodyMedium: {
        fontFamily: fontFamilies.sans,
        fontWeight: fontWeights.light,
        fontSize: fontSizes.bodyMedium.mobile.fontSize,
        lineHeight: fontSizes.bodyMedium.mobile.lineHeight,
        letterSpacing: '0',
    },
    /** AKA bolded P-Default in design library */
    bodyMediumBoldSans: {
        fontFamily: fontFamilies.sans,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.bodyMedium.mobile.fontSize,
        lineHeight: fontSizes.bodyMedium.mobile.lineHeight,
        letterSpacing: '0',
    },
    /** AKA P-Small in design library */
    bodySmall: {
        fontFamily: fontFamilies.sans,
        fontWeight: fontWeights.light,
        fontSize: fontSizes.bodySmall.mobile.fontSize,
        lineHeight: fontSizes.bodySmall.mobile.lineHeight,
        letterSpacing: '0',
    },
    /** AKA Label in design library */
    bodySmallBoldSans: {
        fontFamily: fontFamilies.sans,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.bodySmallCompact.mobile.fontSize,
        lineHeight: fontSizes.bodySmallCompact.mobile.lineHeight,
        letterSpacing: '0.02em',
    },
    /** AKA P-Caption in design library */
    bodyExtraSmall: {
        fontFamily: fontFamilies.sans,
        fontWeight: fontWeights.light,
        fontSize: fontSizes.bodyExtraSmall.mobile.fontSize,
        lineHeight: fontSizes.bodyExtraSmall.mobile.lineHeight,
        letterSpacing: '0',
    },
    /** AKA CTA-Small in design library */
    bodyExtraSmallBoldSerif: {
        fontFamily: fontFamilies.serif,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.bodyExtraSmallCompact.mobile.fontSize,
        lineHeight: fontSizes.bodyExtraSmallCompact.mobile.lineHeight,
        letterSpacing: '0',
    },
    /** AKA Label-Small in design library */
    bodyExtraSmallBoldSans: {
        fontFamily: fontFamilies.sans,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.bodyExtraSmallCompact.mobile.fontSize,
        lineHeight: fontSizes.bodyExtraSmallCompact.mobile.lineHeight,
        letterSpacing: '0.02em',
    },
    bodyExtraExtraSmallBoldSans: {
        fontFamily: fontFamilies.sans,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.bodyExtraExtraSmall.mobile.fontSize,
        lineHeight: fontSizes.bodyExtraExtraSmall.mobile.lineHeight,
        letterSpacing: '0.02em',
    },
    body1: undefined, // Unused MUI default
    body2: undefined, // Unused MUI default
    button: undefined, // Unused MUI default
    overline: undefined, // Unused MUI default
}
