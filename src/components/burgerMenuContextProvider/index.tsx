import { ReactElement, useMemo, useState } from 'react'
import BurgerMenuContext from '@contexts/burgerMenuContext'

type Props = {
    children: ReactElement
}

function BurgerMenuContextProvider({ children }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const openMenu = () => setIsOpen(true)
    const closeMenu = () => setIsOpen(false)
    const initValue = useMemo(() => {
        return { isOpen, openMenu, closeMenu }
    }, [isOpen])
    return <BurgerMenuContext.Provider value={initValue}>{children}</BurgerMenuContext.Provider>
}

export default BurgerMenuContextProvider
