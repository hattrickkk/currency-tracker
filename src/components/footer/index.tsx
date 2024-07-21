import React from 'react'
import FOOTER_MENU_ITEMS from '@constants/footerMenuItems'
import LinkItem from '@ui/linkItem'
import Logo from '@ui/logo'

import * as global from '@styles/global.module.scss'
import * as styles from './style.module.scss'

function Footer() {
    const navigationClickHandler = (e: React.MouseEvent<HTMLElement>) => {
        const el = e.target as HTMLElement
        if (el.closest(`.${styles.main__menu}`)) {
            el.classList.toggle(styles.active)
        }
    }

    return (
        <footer className={styles.footer}>
            <div className={global.container}>
                <div>
                    <div className={styles.main}>
                        <div className={styles.main__descr}>
                            <div className={styles.main__title}>
                                <Logo />
                                <h4>Modsen Currency Tracker</h4>
                            </div>
                            <p className={styles.main__text}>
                                Since then, the company has grown organically to. Starsup is the world&apos;s largest
                                trading platform, with $12 billion worth of currency trading and 500,000 tickets sold
                                daily to tens of thousands of traders worldwide.
                            </p>
                        </div>
                        <nav className={styles.main__nav} onClick={navigationClickHandler}>
                            {FOOTER_MENU_ITEMS.map(block => (
                                <ul key={block.name} className={styles.main__menu}>
                                    <h4>{block.name}</h4>
                                    <div className={styles.main__itemsWrapper}>
                                        {block.items.map(el => (
                                            <LinkItem
                                                key={el.path}
                                                path={el.path}
                                                title={el.title}
                                                className={styles.main__menuItem}
                                            />
                                        ))}
                                    </div>
                                </ul>
                            ))}
                        </nav>
                    </div>
                </div>
                <p className={styles.footer__copyright}>Startsup © 2023-2024, All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default React.memo(Footer)
