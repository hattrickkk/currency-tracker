import { useCallback, useState } from 'react'

type UseModal = {
    isOpen: boolean
    closeMenu: VoidFunction
    openMenu: VoidFunction
}

const useModal = (): UseModal => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const closeMenu = useCallback(() => setIsOpen(false), [])
    const openMenu = useCallback(() => setIsOpen(true), [])
    return {
        isOpen,
        closeMenu,
        openMenu,
    }
}

export default useModal
