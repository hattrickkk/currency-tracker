import CurrenciesSection from '@components/currenciesSection'
import CurrencyConversionBlock from '@components/currencyConversionBlock'
import Popup from '@components/popup'

function HomePage() {
    return (
        <>
            <CurrenciesSection />
            <Popup>
                <CurrencyConversionBlock />
            </Popup>
        </>
    )
}

export default HomePage
