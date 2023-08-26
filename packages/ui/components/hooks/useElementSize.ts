import type { RefObject } from 'react';
import { useEffect, useState } from 'react'

export function useElementSize(elementRef: RefObject<HTMLElement>) {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.contentRect) {
                    setWidth(entry.contentRect.width)
                    setHeight(entry.contentRect.height)
                }
            }
        })
        if (elementRef.current) resizeObserver.observe(elementRef.current)

        return () => {
            resizeObserver.disconnect()
        }
    }, [elementRef])

    return [width, height]
}
