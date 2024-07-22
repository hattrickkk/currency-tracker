import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HEADER_MENU_ITEMS from '@constants/headerMenuItems'
import * as paths from '@constants/paths'
import LinkItem from '@ui/linkItem'
import Logo from '@ui/logo'
import Switcher from '@ui/switcher'
import useModal from '@utils/hooks/useModal'
import clsx from 'clsx'

import * as global from '@styles/global.module.scss'
import * as styles from './style.module.scss'

function Header() {
    const { isOpen, close: closeMenu, open: openMenu } = useModal()
    const navigate = useNavigate()
    const location = useLocation()

    const burgerMenuClickHandler = () => (isOpen ? closeMenu() : openMenu())

    const clickLogoHandler = () => {
        if (isOpen) closeMenu()
        if (location.pathname !== paths.HOME) navigate(paths.HOME)
    }

    useEffect(
        () => (isOpen ? document.body.classList.add(global.lock) : document.body.classList.remove(global.lock)),
        [isOpen]
    )

    return (
        <header className={styles.header}>
            <div className={global.container}>
                <div className={styles.header__inner}>
                    <div className={styles.header__logo} onClick={clickLogoHandler}>
                        <Logo />
                    </div>
                    <div className={styles.separator} />
                    <nav className={clsx(styles.header__nav, isOpen && styles.active)}>
                        <ul className={styles.header__menu}>
                            {HEADER_MENU_ITEMS.map(({ path, title }) => (
                                <LinkItem
                                    key={path}
                                    path={path}
                                    title={title}
                                    className={styles.header__item}
                                    onClick={closeMenu}
                                />
                            ))}
                        </ul>
                        <Switcher />
                    </nav>
                    <div
                        className={clsx(styles.header__burger, isOpen && styles.active)}
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
