import React from 'react'
import CardsContainer from '@components/cardsContainer'
import INDEXES from '@constants/indexesData'
import currencies from '@mockData/currency'
import Title from '@ui/title'

import * as global from '@styles/global.module.scss'
import * as styles from './style.module.scss'
import CURRENCIES_SECTION_NAMES from '@constants/currenciesSectionNames'

function CurrenciesSection() {
    return (
        <section className={styles.currencies}>
            <div className={global.container}>
                <Title value={CURRENCIES_SECTION_NAMES.STOCKS} />
                <CardsContainer elements={INDEXES} type={CURRENCIES_SECTION_NAMES.STOCKS} />
                <Title value={CURRENCIES_SECTION_NAMES.QUOTES} />
                <CardsContainer elements={Object.keys(currencies.data)} type={CURRENCIES_SECTION_NAMES.QUOTES} />
            </div>
        </section>
    )
}

export default CurrenciesSection
