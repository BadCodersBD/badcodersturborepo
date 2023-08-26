import type { ErrorProps } from '../../types/Error'

export function isErrorProps(props: unknown): props is ErrorProps {
    return !!(props as ErrorProps).error
}
