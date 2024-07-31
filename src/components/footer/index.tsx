import React, { useCallback, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import FOOTER_MENU_ITEMS from '@constants/footerMenuItems'
import * as paths from '@constants/paths'
import THEMES from '@constants/themes'
import ThemeContext from '@contexts/themeContext'
import { ThemeContextType } from '@customTypes/context'
import LinkItem from '@ui/linkItem'
import Logo from '@ui/logo'
import clsx from 'clsx'

import * as global from '@styles/global.module.scss'
import * as styles from './style.module.scss'

function Footer() {
    const navigate = useNavigate()
    const location = useLocation()
    const { theme } = useContext<ThemeContextType>(ThemeContext)
    const appNameClickHandler = () => {
        if (location.pathname !== paths.HOME) navigate(paths.HOME)
    }

    const navigationClickHandler = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const el = e.target as HTMLElement
        if (el.closest(`.${styles.main__menu}`)) {
            el.classList.toggle(styles.active)
        }
    }, [])

    return (
        <footer className={clsx(styles.footer, theme === THEMES.LIGHT && styles.light)}>
            <div className={global.container}>
                <div className={styles.main}>
                    <div className={styles.main__descr}>
                        <div className={styles.main__title} onClick={appNameClickHandler}>
                            <Logo />
                            <h4>Modsen Currency Tracker</h4>
                        </div>
                        <p className={styles.main__text}>
                            Since then, the company has grown organically to. Starsup is the world&apos;s largest
                            trading platform, with $12 billion worth of currency trading and 500,000 tickets sold daily
                            to tens of thousands of traders worldwide.
                        </p>
                    </div>
                    <nav className={styles.main__nav} onClick={navigationClickHandler}>
                        {FOOTER_MENU_ITEMS.map(({ name, items }) => (
                            <ul key={name} className={styles.main__menu}>
                                <h4>{name}</h4>
                                <div className={styles.main__itemsWrapper}>
                                    {items.map(({ path, title }) => (
                                        <LinkItem
                                            key={path}
                                            path={path}
                                            title={title}
                                            className={styles.main__menuItem}
                                        />
                                    ))}
                                </div>
                            </ul>
                        ))}
                    </nav>
                </div>
                <p className={styles.footer__copyright}>Startsup © 2023-2024, All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default React.memo(Footer)
