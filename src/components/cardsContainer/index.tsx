import React, { useContext } from 'react'
import CURRENCIES_SECTION_NAMES from '@constants/currenciesSectionNames'
import CURRENCIES_SYMBOLS from '@constants/currenciesSymbols'
import popupContext from '@contexts/popupContext'
import { CurrentCurrency, Index } from '@customTypes/currency'
import CurrencyCard from '@ui/currencyCard'

import * as styles from './style.module.scss'

type Props = {
    elements: (CurrentCurrency | Index)[]
    type: CURRENCIES_SECTION_NAMES
}

function CardsContainer({ elements, type }: Props) {
    const { setCurrentCurrency, openPopup } = useContext(popupContext)

    const currecyCardClickHandler = (code: string, name: string) => () => {
        setCurrentCurrency({
            code,
            name,
        })
        openPopup()
    }

    return (
        <div className={styles.cardsContainer}>
            {type === CURRENCIES_SECTION_NAMES.STOCKS
                ? elements.map(({ name, value, picture }: Index) => (
                      <CurrencyCard key={name} name={name} value={value} picture={picture} />
                  ))
                : elements.map(({ name, code }: CurrentCurrency) => (
                      <CurrencyCard
                          key={code}
                          name={name}
                          code={code}
                          picture={CURRENCIES_SYMBOLS[code]}
                          onClick={currecyCardClickHandler(code, name)}
                      />
                  ))}
        </div>
    )
}

export default React.memo(CardsContainer)
