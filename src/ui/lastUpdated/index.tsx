import React from 'react'

import * as global from '@styles/global.module.scss'
import * as styles from '@ui/lastUpdated/style.module.scss'

type Props = {
    time: string
}

function LastUpdated({ time }: Props) {
    const hours = new Date(time).getUTCHours()
    const minutes = new Date(time).getUTCMinutes()
    return (
        <div className={styles.lastUpdated}>
            <div className={global.container}>
                <span className={styles.lastUpdated__text}>
                    Last updated at {hours % 12 ? hours % 12 : 12}.{minutes} {hours > 12 ? 'pm' : 'am'}
                </span>
            </div>
        </div>
    )
}
export default React.memo(LastUpdated)
