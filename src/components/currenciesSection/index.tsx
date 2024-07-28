import CardsContainer from '@components/cardsContainer'
import CURRENCIES_NAMES_ARR from '@constants/currenciesNames'
import CURRENCIES_SECTION_NAMES from '@constants/currenciesSectionNames'
import INDEXES from '@constants/indexesData'
import Title from '@ui/title'

import * as global from '@styles/global.module.scss'
import * as styles from './style.module.scss'

function CurrenciesSection() {
    return (
        <section className={styles.currencies}>
            <div className={global.container}>
                <Title value={CURRENCIES_SECTION_NAMES.STOCKS} />
                <CardsContainer elements={INDEXES} type={CURRENCIES_SECTION_NAMES.STOCKS} />
                <Title value={CURRENCIES_SECTION_NAMES.QUOTES} />
                <CardsContainer elements={CURRENCIES_NAMES_ARR} type={CURRENCIES_SECTION_NAMES.QUOTES} />
            </div>
        </section>
    )
}

export default CurrenciesSection
