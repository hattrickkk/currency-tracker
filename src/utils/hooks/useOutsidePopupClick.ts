import { useEffect } from 'react'

const useOutsidePopupClick = (
    ref: React.MutableRefObject<HTMLElement>,
    fn: VoidFunction,
    isPopupOpen: boolean,
    className: string
): void => {
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && (e.target as HTMLElement).classList.contains(className)) {
                fn()
            }
        }

        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [ref, isPopupOpen])
}

export default useOutsidePopupClick
