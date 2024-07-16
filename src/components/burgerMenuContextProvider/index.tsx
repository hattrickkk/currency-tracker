import { ReactElement, useMemo, useState } from 'react'
import BurgerMenuContext from '@contexts/burgerMenuContext'
import PropTypes from 'prop-types'

type PropsType = {
    children: ReactElement
}

function BurgerMenuContextProvider({ children }: PropsType) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const openMenu = () => setIsOpen(true)
    const closeMenu = () => setIsOpen(false)
    const initValue = useMemo(() => {
        return { isOpen, openMenu, closeMenu }
    }, [isOpen])
    return <BurgerMenuContext.Provider value={initValue}>{children}</BurgerMenuContext.Provider>
}

BurgerMenuContextProvider.propTypes = {
    children: PropTypes.element.isRequired,
}

export default BurgerMenuContextProvider
