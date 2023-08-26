import { useMemo } from 'react'

import type { FormatImageUrl, ImageMediaParams } from '../../contexts';
import { useFormatImageUrl } from '../../contexts'
import type { FourColumnGridSpan, TwelveColumnGridSpan } from '../../elements/GridColumn'
import type { Breakpoint, BreakpointSpecific } from '../../foundations/breakpoints';
import { orderedBreakpoints, smallestBreakpoint } from '../../foundations/breakpoints'
import type { ImageProps } from '../../elements/Image'
import type { Theme } from '../../foundations/theming';
import { useTheme } from '../../foundations/theming'
import { calculateImageWidths } from './calculateImageWidths'

type HookImageMediaParams = Pick<ImageMediaParams, 'aspectRatio' | 'scaleMode'>

type SpanOptions<TGridSpan extends TwelveColumnGridSpan> = HookImageMediaParams & {
    /**
     * If set, will calculate the image width based on the width of the span in the grid system.
     * If unset, will calculate the image width based on the full screen width.
     */
    span?: Extract<TGridSpan, number>
}

type WidthOptions = HookImageMediaParams & {
    /**
     * The image width (in px @ 1dpr or %) for the image source.
     */
    width: number | `${number}%`
}

type EmptyOptions = {
    /**
     * Return a tiny "data:" image as the "srcSet".
     */
    empty: true
}

type BreakpointOptions<TGridSpan extends TwelveColumnGridSpan> = SpanOptions<TGridSpan> | WidthOptions | EmptyOptions

export type UseImageSourcesOptions = BreakpointSpecific<
    BreakpointOptions<FourColumnGridSpan>,
    BreakpointOptions<TwelveColumnGridSpan>
>

export function useImageSources(
    imageUrl: string,
    /** The options to apply to the specified breakpoint (and upward). Larger breakpoints override smaller breakpoints. */
    options?: UseImageSourcesOptions,
): ImageProps['sources']

export function useImageSources(
    imageUrl: string | undefined,
    /** The options to apply to the specified breakpoint (and upward). Larger breakpoints override smaller breakpoints. */
    options?: UseImageSourcesOptions,
): ImageProps['sources'] | undefined

export function useImageSources(
    imageUrl: string | undefined,
    options: UseImageSourcesOptions = { [smallestBreakpoint]: {} },
) {
    const theme = useTheme()
    const formatImageUrl = useFormatImageUrl()

    return useMemo(() => {
        if (!imageUrl && imageUrl !== '') return undefined

        return getAllOptionsSourcesData(options).flatMap((optionsSourcesData) =>
            buildOptionsSources(imageUrl, optionsSourcesData, formatImageUrl, theme),
        )
    }, [formatImageUrl, imageUrl, options, theme])
}

type OptionsSourcesData = {
    breakpoints: Array<Breakpoint>
    options: BreakpointOptions<TwelveColumnGridSpan>
}

function getAllOptionsSourcesData(options: UseImageSourcesOptions) {
    const allOptionsSourcesData: Array<OptionsSourcesData> = []

    orderedBreakpoints.forEach((breakpoint) => {
        const breakpointOptions = options[breakpoint]

        if (breakpointOptions) {
            /*
             * As we iterate breakpoints from smallest to largest, we unshift to reverse our output to largest to smallest.
             * This largest to smallest order is then the correct order for use by source tags inside a picture tag.
             */
            allOptionsSourcesData.unshift({ breakpoints: [], options: breakpointOptions })
        }
    })

    return allOptionsSourcesData
}

function buildOptionsSources(
    imageUrl: string,
    { breakpoints, options }: OptionsSourcesData,
    formatImageUrl: FormatImageUrl,
    theme: Theme,
): ImageProps['sources'] {
    let source: ImageProps['sources'][number] = { mediaMinWidth: breakpoints[0], srcSet: [] }

    if (isEmptyOptions(options)) {
        return [
            {
                ...source,
                srcSet: buildEmptySrcSetEntries(),
            },
        ]
    }

    let imageWidthsFor1Dpr: Array<number>

    if (isWidthOptions(options)) {
        if (typeof options.width === 'number') {
            source = { ...source, sizes: `${options.width}px` }
            imageWidthsFor1Dpr = [options.width]
        } else {
            const percentage = options.width
            source = { ...source, sizes: percentage.replace('%', 'vw') }
            imageWidthsFor1Dpr = breakpoints.flatMap((breakpoint) => calculateImageWidths(theme, breakpoint))
        }
    } else {
        source = { ...source, span: options.span }
        imageWidthsFor1Dpr = breakpoints.flatMap((breakpoint) => calculateImageWidths(theme, breakpoint))
    }

    return [
        {
            ...source,
            srcSet: buildSrcSetEntries(imageUrl, options, imageWidthsFor1Dpr, formatImageUrl, 'webp'),
            type: 'image/webp',
        },
        {
            ...source,
            srcSet: buildSrcSetEntries(imageUrl, options, imageWidthsFor1Dpr, formatImageUrl),
        },
    ]
}

function isEmptyOptions(options: BreakpointOptions<TwelveColumnGridSpan>): options is EmptyOptions {
    return !!(options as EmptyOptions).empty
}

function isWidthOptions(options: BreakpointOptions<TwelveColumnGridSpan>): options is WidthOptions {
    return !!(options as WidthOptions).width
}

function buildEmptySrcSetEntries() {
    return [
        {
            // The smallest "data:" image - see https://stackoverflow.com/a/33572164/10821598
            src: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
            width: 1,
        },
    ]
}

function buildSrcSetEntries(
    imageUrl: string,
    options: BreakpointOptions<TwelveColumnGridSpan>,
    imageWidthsFor1Dpr: Array<number>,
    formatImageUrl: FormatImageUrl,
    format?: ImageMediaParams['format'],
) {
    const srcSetsEntries: ImageProps['sources'][number]['srcSet'] = []

    const imageWidthsFor2Dpr = imageWidthsFor1Dpr.map((width) => width * 2)

        /**
         * The resulting srcset entries are not necessarily in ascending width order.
         * This doesn't seem to be an issue for browsers.
         */
        ;[...imageWidthsFor1Dpr, ...imageWidthsFor2Dpr].forEach((width) => {
            if (!srcSetsEntries.find((entry) => entry.width === width)) {
                srcSetsEntries.push({
                    src: formatImageUrl(imageUrl, { ...options, width, format }),
                    width,
                })
            }
        })

    return srcSetsEntries
}
