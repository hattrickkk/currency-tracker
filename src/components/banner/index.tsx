import React from 'react'
import bannerLogo from '@assets/bannerLogo.svg'

import * as styles from '@components/banner/style.module.scss'
import * as global from '@styles/global.module.scss'

function Banner() {
    return (
        <div className={styles.banner}>
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

export default React.memo(Banner)
