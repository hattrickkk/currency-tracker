import { useEffect } from 'react'

const useOutsideDropdownClick = (ref: React.MutableRefObject<HTMLElement>, fn: VoidFunction): void => {
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
                fn()
            }
        }

        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [ref])
}

export default useOutsideDropdownClick
