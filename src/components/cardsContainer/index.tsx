import React, { useContext } from 'react'
import CURRENCIES_SYMBOLS from '@constants/currenciesSymbols'
import CurrentCurrencyContext from '@contexts/currentCurrencyContext'
import { Index } from '@customTypes/currency'
import currencies from '@mockData/currency'
import CurrencyCard from '@ui/currencyCard'

import * as styles from './style.module.scss'

type Props = {
    elements: (string | Index)[]
    type: 'currency' | 'index'
}

function CardsContainer({ elements, type }: Props) {
    const { setCurrentCurrency, openPopup } = useContext(CurrentCurrencyContext)

    return (
        <div className={styles.cardsContainer}>
            {elements.map((el: string | Index) => {
                return type === 'currency' ? (
                    <CurrencyCard
                        key={currencies.data[el as string].code}
                        name={currencies.data[el as string].name}
                        code={currencies.data[el as string].code}
                        picture={CURRENCIES_SYMBOLS[el as string]}
                        onClick={() => {
                            setCurrentCurrency({
                                code: currencies.data[el as string].code,
                                name: currencies.data[el as string].name,
                            })
                            openPopup()
                        }}
                    />
                ) : (
                    <CurrencyCard
                        key={(el as Index).name}
                        name={(el as Index).name}
                        value={(el as Index).value}
                        picture={(el as Index).picture}
                    />
                )
            })}
        </div>
    )
}

export default React.memo(CardsContainer)
