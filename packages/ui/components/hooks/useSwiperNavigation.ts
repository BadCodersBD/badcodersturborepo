import { useState } from 'react'
import type { Swiper as SwiperType } from 'swiper/types'

export function useSwiperNavigation() {
    const [swipe, setSwipe] = useState<SwiperType | null>(null)
    const [isBeginning, setIsBeginning] = useState<boolean>(true)
    const [isEnd, setIsEnd] = useState<boolean>(!!swipe?.isEnd)

    return {
        previousButton: {
            tabIndex: -1,
            disabled: isBeginning,
            onClick: () => {
                swipe?.slidePrev()
            },
        },
        swiper: {
            onSwiper: setSwipe,
            onProgress: (swiper: SwiperType, progress: number) => {
                if (swiper.snapGrid.length === 1) {
                    setIsBeginning(true)
                    setIsEnd(true)
                } else {
                    setIsBeginning(progress <= 0)
                    setIsEnd(progress >= 1)
                }
            },
        },
        slide: {
            onFocus: (index: number) => {
                swipe?.slideTo(index)
            },
        },
        nextButton: {
            tabIndex: -1,
            disabled: isEnd,
            onClick: () => {
                swipe?.slideNext()
            },
        },
    }
}
