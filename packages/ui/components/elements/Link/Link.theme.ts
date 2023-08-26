import type { Property } from 'csstype'

import type { LinkProps } from './Link'

type LinkVariantStateTheme = {
    borderColor: Property.Color
    fontColor: Property.Color
    underlineHeight: string
}

type LinkVariantFocusStateTheme = {
    outline: Property.Outline
}

type LinkVariantDisabledStateTheme = {
    fontColor: Property.Color
}

type LinkVariantTheme = {
    default: LinkVariantStateTheme
    focus: LinkVariantFocusStateTheme
    hover: Omit<LinkVariantStateTheme, 'underlineHeight'>
    disabled: LinkVariantDisabledStateTheme
}

export type LinkTheme = {
    variants: Record<Required<LinkProps>['variant'], LinkVariantTheme>
}
