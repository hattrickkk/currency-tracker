import React, { useMemo } from 'react'

import * as global from '@styles/global.module.scss'
import * as styles from '@ui/lastUpdated/style.module.scss'
import getLastUpdated from '@utils/getLastUpdated'

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
