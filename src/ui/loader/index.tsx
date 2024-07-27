import { memo } from 'react'
import USD from '@assets/currencies/USD.svg'

import * as styles from './style.module.scss'

function Loader() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <div className={styles.loader}>
                    <img src={USD} alt='' />
                </div>
            </div>
        </div>
    )
}

export default memo(Loader)
