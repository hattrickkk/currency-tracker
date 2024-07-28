import React, { useContext } from 'react'
import THEMES from '@constants/themes'
import ThemeContext from '@contexts/themeContext'
import { ThemeContextType } from '@customTypes/context'
import clsx from 'clsx'

import * as styles from '@ui/title/style.module.scss'

type Props = {
    value: string
}

function Title({ value }: Props) {
    const { theme } = useContext<ThemeContextType>(ThemeContext)
    return <h3 className={clsx(styles.title, theme === THEMES.LIGHT && styles.light)}>{value}</h3>
}

export default React.memo(Title)
