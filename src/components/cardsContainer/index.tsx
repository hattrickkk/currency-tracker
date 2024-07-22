import React, { useContext } from 'react'
import CURRENCIES_SECTION_NAMES from '@constants/currenciesSectionNames'
import CURRENCIES_SYMBOLS from '@constants/currenciesSymbols'
import popupContext from '@contexts/popupContext'
import { Index } from '@customTypes/currency'
import currencies from '@mockData/currency'
import CurrencyCard from '@ui/currencyCard'

import * as styles from './style.module.scss'

type Props = {
    elements: (string | Index)[]
    type: CURRENCIES_SECTION_NAMES
}

function CardsContainer({ elements, type }: Props) {
    const { setCurrentCurrency, openPopup } = useContext(popupContext)

    const currecyCardClickHandler = (el: string) => () => {
        setCurrentCurrency({
            code: currencies.data[el].code,
            name: currencies.data[el].name,
        })
        openPopup()
    }

    return (
        <div className={styles.cardsContainer}>
            {type === CURRENCIES_SECTION_NAMES.STOCKS
                ? elements.map(({ name, value, picture }: Index) => (
                      <CurrencyCard key={name} name={name} value={value} picture={picture} />
                  ))
                : elements.map((el: string) => (
                      <CurrencyCard
                          key={currencies.data[el].code}
                          name={currencies.data[el].name}
                          code={currencies.data[el].code}
                          picture={CURRENCIES_SYMBOLS[el]}
                          onClick={currecyCardClickHandler(el)}
                      />
                  ))}
        </div>
    )
}

export default React.memo(CardsContainer)
