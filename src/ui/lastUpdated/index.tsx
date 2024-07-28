import React, { useContext, useMemo } from 'react'
import THEMES from '@constants/themes'
import ThemeContext from '@contexts/themeContext'
import { ThemeContextType } from '@customTypes/context'
import getLastUpdated from '@utils/getLastUpdated'
import clsx from 'clsx'

import * as global from '@styles/global.module.scss'
import * as styles from './style.module.scss'

type Props = {
    time: string
}

function LastUpdated({ time }: Props) {
    const { theme } = useContext<ThemeContextType>(ThemeContext)
    const lastUpdated = useMemo(() => {
        return getLastUpdated(time)
    }, [time])
    return (
        <div className={clsx(styles.lastUpdated, theme === THEMES.LIGHT && styles.light)}>
            <div className={global.container}>
                <span className={styles.lastUpdated__text}>{lastUpdated}</span>
            </div>
        </div>
    )
}
export default React.memo(LastUpdated)
