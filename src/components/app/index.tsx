import Banner from '@components/banner'
import CardsContainer from '@components/cardsContainer'
import CurrenciesSection from '@components/currenciesSection'
import Footer from '@components/footer'
import Header from '@components/header'
import Popup from '@components/popup'
import CurrencyCard from '@ui/currencyCard'
import LastUpdated from '@ui/lastUpdated'

import * as global from '@styles/global.module.scss'

function App() {
    return (
        <div className={global.wrapper}>
            <Header />

            <Banner />
            <LastUpdated time='2024-07-10T23:59:59Z' />

            <CurrenciesSection />
            <Popup />
            <Footer />
        </div>
    )
}

export default App
