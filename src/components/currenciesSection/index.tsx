import React from 'react'
import CardsContainer from '@components/cardsContainer'
import INDEXES from '@constants/indexesData'
import currencies from '@mockData/currency'
import Title from '@ui/title'

import * as global from '@styles/global.module.scss'
import * as styles from './style.module.scss'

function CurrenciesSection() {
    return (
        <section className={styles.currencies}>
            <div className={global.container}>
                <Title value='Stocks' />
                <CardsContainer elements={INDEXES} type='index' />
                <Title value='Quotes' />
                <CardsContainer elements={Object.keys(currencies.data)} type='currency' />
            </div>
        </section>
    )
}

export default CurrenciesSection
