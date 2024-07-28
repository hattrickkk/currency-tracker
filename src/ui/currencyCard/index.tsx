import React, { useContext } from 'react'
import { INIT_CURRENCY } from '@constants/magicValues'
import THEMES from '@constants/themes'
import CurrencyContext from '@contexts/currencyContext'
import ThemeContext from '@contexts/themeContext'
import { CurrencyContextType, ThemeContextType } from '@customTypes/context'
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
    const { data } = useContext<CurrencyContextType>(CurrencyContext)

    return (
        <div className={clsx(styles.card, theme === THEMES.LIGHT && styles.light)} onClick={onClick}>
            <div className={styles.card__inner}>
                <div className={styles.card__img}>
                    <img src={picture} alt={code} />
                </div>
                <div className={styles.card__info}>
                    <h5 className={styles.card__title}>{name}</h5>
                    <p className={styles.card__text}> {value || `$ ${data[code][INIT_CURRENCY]?.value.toFixed(2)}`}</p>
                </div>
            </div>
        </div>
    )
}

export default React.memo(CurrencyCard)
