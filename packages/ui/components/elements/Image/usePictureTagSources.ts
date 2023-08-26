import type { SourceHTMLAttributes } from 'react';
import { useMemo } from 'react'

import type { Breakpoint } from '../../foundations/breakpoints';
import { orderedBreakpoints, smallestBreakpoint } from '../../foundations/breakpoints'
import type { Theme } from '../../foundations/theming';
import { useTheme } from '../../foundations/theming'
import { getSpanVwCalcForGivenValues } from '../../utils/getSpanVwCalc'
import type { ImageProps } from './Image';
import { isSizesImageSource } from './Image'

type HtmlSource = Pick<SourceHTMLAttributes<HTMLSourceElement>, 'media' | 'srcSet' | 'sizes' | 'type'>

type PictureTagData = {
    htmlSources: Array<HtmlSource>
    fallbackSrc: string
}

export function usePictureTagSources(sources: ImageProps['sources']): PictureTagData {
    const theme = useTheme()

    const fallbackSrc = useMemo(() => getFallbackSrc(sources), [sources])
    const htmlSources = useMemo(() => buildHtmlSources(sources, theme), [sources, theme])

    return { fallbackSrc, htmlSources }
}

function getFallbackSrc(sources: ImageProps['sources']) {
    const fallbackSource = sources.find(
        (source) =>
            source.srcSet.length > 0 && (!source.type || (source.type !== 'image/webp' && source.type !== 'image/avif')),
    )

    if (!fallbackSource) return ''

    const { src } = fallbackSource.srcSet.reduce((widestSrcSet, srcSet) => {
        return srcSet.width > widestSrcSet.width ? srcSet : widestSrcSet
    })
    return src
}

function buildHtmlSources(sources: ImageProps['sources'], theme: Theme) {
    return sources.map((source) => ({
        media: buildHtmlSourcesMediaAttribute(source, theme),
        sizes: buildHtmlSourceSizesAttribute(source, theme),
        srcSet: source.srcSet.map(({ src, width }) => `${src} ${width}w`).join(','),
        type: source.type,
    }))
}

function buildHtmlSourcesMediaAttribute({ mediaMinWidth }: ImageProps['sources'][number], theme: Theme) {
    if (!mediaMinWidth || mediaMinWidth === smallestBreakpoint) return undefined
    return theme.breakpoints.up(mediaMinWidth).replace('@media', '').trim()
}

function buildHtmlSourceSizesAttribute(source: ImageProps['sources'][number], theme: Theme) {
    if (isSizesImageSource(source)) {
        return source.sizes
    }

    if (!source.span) {
        return undefined
    }

    return getSpanVwCalcForGivenValues(
        theme,
        source.span,
        // Using a min grid value can cause some inaccuracy but for the sizes attribute, this is acceptable.
        getMinGridWidth(theme, 'margin', source.mediaMinWidth),
        getMinGridWidth(theme, 'gutter', source.mediaMinWidth),
    )
}

function getMinGridWidth(theme: Theme, type: 'margin' | 'gutter', breakpoint: Breakpoint = smallestBreakpoint) {
    const startIndex = orderedBreakpoints.indexOf(breakpoint)

    return Object.values(theme.grid[type].width).reduce((minWidth, width, i) => {
        if (i < startIndex) return minWidth
        return width < minWidth ? width : minWidth
    }, Infinity)
}
