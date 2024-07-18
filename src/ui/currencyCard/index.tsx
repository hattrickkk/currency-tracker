import React from 'react'
import PropsType from 'prop-types'

import * as styles from '@ui/currencyCard/style.module.scss'

type PropsType = {
    name: string
    picture: string
    code?: string
    value?: string
}

function CurrencyCard({ name, code, picture, value }: PropsType) {
    return (
        <div className={styles.card}>
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

CurrencyCard.propsType = {
    name: PropsType.string.isRequired,
    code: PropsType.string,
    picture: PropsType.string.isRequired,
}

export default React.memo(CurrencyCard)
