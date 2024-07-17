import { useCallback, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HEADER_MENU_ITEMS from '@constants/headerMenuItems'
import * as paths from '@constants/paths'
import BurgerMenuContext from '@contexts/burgerMenuContext'
import { BurgerMenuContextType } from '@customTypes/context'
import LinkItem from '@ui/linkItem'
import Logo from '@ui/logo'
import Switcher from '@ui/switcher'

import * as styles from '@components/header/style.module.scss'
import * as global from '@styles/global.module.scss'

function Header() {
    const { isOpen, openMenu, closeMenu } = useContext<BurgerMenuContextType>(BurgerMenuContext)
    const navigate = useNavigate()
    const location = useLocation()

    const burgerMenuClickHandler = useCallback(() => {
        isOpen ? closeMenu() : openMenu()
    }, [isOpen])

    const clickLogoHandler = useCallback(() => {
        if (isOpen) closeMenu()
        if (location.pathname !== paths.HOME) navigate(paths.HOME)
    }, [isOpen, location])

    return (
        <header className={styles.header}>
            <div className={global.container}>
                <div className={styles.header__inner}>
                    <div className={styles.header__logo} onClick={clickLogoHandler}>
                        <Logo />
                    </div>
                    <div className={styles.separator} />
                    <nav className={isOpen ? [styles.active, styles.header__nav].join(' ') : styles.header__nav}>
                        <ul className={styles.header__menu}>
                            {HEADER_MENU_ITEMS.map(el => (
                                <LinkItem
                                    key={el.path}
                                    path={el.path}
                                    title={el.title}
                                    className={styles.header__item}
                                    onClick={closeMenu}
                                />
                            ))}
                        </ul>
                        <div>
                            <Switcher />
                        </div>
                    </nav>
                    <div
                        className={isOpen ? [styles.active, styles.header__burger].join(' ') : styles.header__burger}
                        onClick={burgerMenuClickHandler}
                    >
                        <span />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
