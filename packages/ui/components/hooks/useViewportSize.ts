import debounce from 'lodash.debounce'
import { useEffect, useState } from 'react'

// TODO - import...from foundation...?
export const breakpoints = {
    // from '../../ui/foundation/breakpoints'
    xs: 0,
    sm: 375,
    md: 768,
    lg: 1024,
    xl: 1440,
}

type ViewportSize = keyof typeof breakpoints
export interface Viewport {
    size: ViewportSize
    px: number
}

interface UseViewportSizeConfig {
    defaultViewportSize?: ViewportSize
    debounceWait?: number
}

const DEFAULT_USE_VIEWPORT_SIZE_CONFIG: Required<UseViewportSizeConfig> = {
    defaultViewportSize: 'xs',
    debounceWait: 150,
}

function getViewport(defaultViewportSize: ViewportSize): Viewport {
    const defaultViewport = { size: defaultViewportSize, px: breakpoints[defaultViewportSize] }

    if (typeof window === 'undefined') return defaultViewport

    const px = document.documentElement.clientWidth
    const minWidth = Object.values(breakpoints)
        .sort((a, b) => b - a)
        .find((width) => px >= width)
    const size =
        (Object.keys(breakpoints).find(
            (breakpoint) => breakpoints[breakpoint as ViewportSize] === minWidth,
        ) as ViewportSize) || defaultViewport.size

    return {
        size,
        px,
    }
}

export function useViewportSize(config?: UseViewportSizeConfig) {
    const { defaultViewportSize, debounceWait } = {
        ...DEFAULT_USE_VIEWPORT_SIZE_CONFIG,
        ...config,
    }
    const [viewport, setViewport] = useState(getViewport(defaultViewportSize))

    const handleWindowResize = debounce(() => setViewport(getViewport(defaultViewportSize)), debounceWait)

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    })

    return viewport
}
