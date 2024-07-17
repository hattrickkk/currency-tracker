import React from 'react'
import PropsType from 'prop-types'

import * as global from '@styles/global.module.scss'
import * as styles from '@ui/lastUpdated/style.module.scss'

type PropsType = {
    time: string
}

function LastUpdated({ time }: PropsType) {
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

LastUpdated.propsType = {
    time: PropsType.string.isRequired,
}

export default React.memo(LastUpdated)
