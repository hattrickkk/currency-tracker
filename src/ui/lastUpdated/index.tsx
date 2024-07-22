import React, { useMemo } from 'react'
import getLastUpdated from '@utils/getLastUpdated'

import * as global from '@styles/global.module.scss'
import * as styles from './style.module.scss'

type Props = {
    time: string
}

function LastUpdated({ time }: Props) {
    const lastUpdated = useMemo(() => {
        return getLastUpdated(time)
    }, [time])
    return (
        <div className={styles.lastUpdated}>
            <div className={global.container}>
                <span className={styles.lastUpdated__text}>{lastUpdated}</span>
            </div>
        </div>
    )
}
export default React.memo(LastUpdated)
