import React, { useContext } from 'react'
import THEMES from '@constants/themes'
import ThemeContext from '@contexts/themeContext'
import { ThemeContextType } from '@customTypes/context'
import clsx from 'clsx'

import * as styles from '@ui/currencyCard/style.module.scss'

type Props = {
    name: string
    picture: string
    code?: string
    value?: string
    onClick?: () => void
}

function CurrencyCard({ name, code, picture, value, onClick }: Props) {
    const { theme } = useContext<ThemeContextType>(ThemeContext)
    return (
        <div className={clsx(styles.card, theme === THEMES.LIGHT && styles.light)} onClick={onClick}>
            <div className={styles.card__inner}>
                <div className={styles.card__img}>
                    <img src={picture} alt={code} />
                </div>
                <div className={styles.card__info}>
                    <h5 className={styles.card__title}>{name}</h5>
                    <p className={styles.card__text}> {value || 'R$ 5,13'}</p>
                </div>
            </div>
        </div>
    )
}

export default React.memo(CurrencyCard)
