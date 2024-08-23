import { useCallback, useState } from 'react'

type UseModal = {
    isOpen: boolean
    close: VoidFunction
    open: VoidFunction
}

const useModal = (): UseModal => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const close = useCallback(() => setIsOpen(false), [])
    const open = useCallback(() => setIsOpen(true), [])
    return {
        isOpen,
        close,
        open,
    }
}

export default useModal
