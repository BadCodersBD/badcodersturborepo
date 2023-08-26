import { useEffect, useRef } from 'react'

declare const UNDEFINED_VOID_ONLY: unique symbol
type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never }
type EffectCallback = () => void | Destructor
type DependencyList = ReadonlyArray<unknown>

export function useEffectOnMountOnly(effect: EffectCallback, deps?: DependencyList) {
    const hasMountedRef = useRef(false)
    useEffect(
        () => {
            if (!hasMountedRef.current) effect()
            hasMountedRef.current = true
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        deps,
    )
}

export function useEffectOnUpdateOnly(effect: EffectCallback, deps?: DependencyList) {
    const hasMountedRef = useRef(false)
    useEffect(
        () => {
            if (hasMountedRef.current) effect()
            hasMountedRef.current = true
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        deps,
    )
}
