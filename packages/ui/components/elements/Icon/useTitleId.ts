import { useEffect, useState } from 'react'

import { uuidv4 } from '../../utils/uuid'

/** This needs to only run client-side so the unique id doesn't mismatch between the client and server renders. */
export function useTitleId(title: string | undefined) {
    const [titleId, setTitleId] = useState<string>()

    useEffect(() => {
        if (title) setTitleId(uuidv4())
    }, [title])

    return titleId
}
