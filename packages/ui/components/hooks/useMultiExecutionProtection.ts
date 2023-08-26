import { useState } from 'react'

export function useMultiExecutionProtection<TArgs extends Array<unknown>>(
    callback: (complete: () => void, ...args: TArgs) => void | Promise<void>,
): [protectedCallback: (...args: TArgs) => Promise<void>, inProgress: boolean] {
    const [inProgress, setInProgress] = useState(false)

    async function protectedCallback(...args: TArgs) {
        if (!inProgress) {
            setInProgress(true)
            await callback(() => setInProgress(false), ...args)
        }
    }

    return [protectedCallback, inProgress]
}
