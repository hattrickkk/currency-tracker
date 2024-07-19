import React, { useContext } from 'react'
import CURRENCIES_SYMBOLS from '@constants/currenciesSymbols'
import CurrentCurrencyContext from '@contexts/currentCurrencyContext'
import { IndexType } from '@customTypes/currency'
import currencies from '@mockData/currency'
import CurrencyCard from '@ui/currencyCard'

import * as styles from '@components/cardsContainer/style.module.scss'

type PropsType = {
    elements: (string | IndexType)[]
    type: 'currency' | 'index'
}

function CardsContainer({ elements, type }: PropsType) {
    const { setCurrentCurrency, openPopup } = useContext(CurrentCurrencyContext)

    return (
        <div className={styles.cardsContainer}>
            {elements.map((el: string | IndexType, i) => {
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
                        key={(el as IndexType).name}
                        name={(el as IndexType).name}
                        value={(el as IndexType).value}
                        picture={(el as IndexType).picture}
                    />
                )
            })}
        </div>
    )
}

export default React.memo(CardsContainer)
