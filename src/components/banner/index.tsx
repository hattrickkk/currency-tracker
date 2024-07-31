import { useContext } from 'react'
import bannerLogo from '@assets/bannerLogo.svg'
import THEMES from '@constants/themes'
import ThemeContext from '@contexts/themeContext'
import { ThemeContextType } from '@customTypes/context'
import clsx from 'clsx'

import * as global from '@styles/global.module.scss'
import * as styles from './style.module.scss'

function Banner() {
    const { theme } = useContext<ThemeContextType>(ThemeContext)
    return (
        <div className={clsx(styles.banner, theme === THEMES.LIGHT && styles.light)}>
            <div className={global.container}>
                <div className={styles.banner__inner}>
                    <div className={styles.banner__text}>
                        <h1 className={styles.banner__title}>Modsen Currency</h1>
                        <h2 className={styles.banner__subtitle}>Tracker</h2>
                        <p className={styles.banner__label}>
                            Quotes for the dollar and other international currencies.
                        </p>
                    </div>
                    <div className={styles.banner__logo}>
                        <img src={bannerLogo} alt='modsen-currency-tarcker-logo' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
