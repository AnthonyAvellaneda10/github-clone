

import { useEffect } from 'react'

export function useScrollLock(isLocked: boolean) {
    useEffect(() => {
        if (isLocked) {
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = '15px' // Compensate for scrollbar disappearance
        } else {
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
        }

        return () => {
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
        }
    }, [isLocked])
}