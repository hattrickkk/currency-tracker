import { ReactElement, useMemo, useState } from 'react'
import CurrentCurrencyContext from '@contexts/currentCurrencyContext'
import { CurrentCurrency } from '@customTypes/currency'

type Props = {
    children: ReactElement
}

function CurrentCurrencyContextProvider({ children }: Props) {
    const [currentCurrency, setCurrentCurrency] = useState({
        name: '',
        code: '',
    } as CurrentCurrency)

    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
    const openPopup = () => setIsPopupOpen(true)
    const closePopup = () => setIsPopupOpen(false)

    const initValue = useMemo(() => {
        return { currentCurrency, setCurrentCurrency, isPopupOpen, openPopup, closePopup }
    }, [currentCurrency, isPopupOpen])

    return <CurrentCurrencyContext.Provider value={initValue}>{children}</CurrentCurrencyContext.Provider>
}

export default CurrentCurrencyContextProvider
