import { ReactElement, useMemo, useState } from 'react'
import CurrentCurrencyContext from '@contexts/currentCurrencyContext'
import { CurrentCurrencyType } from '@customTypes/currency'

type PropsType = {
    children: ReactElement
}

function CurrentCurrencyContextProvider({ children }: PropsType) {
    const [currentCurrency, setCurrentCurrency] = useState({
        name: '',
        code: '',
    } as CurrentCurrencyType)

    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
    const openPopup = () => setIsPopupOpen(true)
    const closePopup = () => setIsPopupOpen(false)

    const initValue = useMemo(() => {
        return { currentCurrency, setCurrentCurrency, isPopupOpen, openPopup, closePopup }
    }, [currentCurrency, isPopupOpen])

    return <CurrentCurrencyContext.Provider value={initValue}>{children}</CurrentCurrencyContext.Provider>
}

export default CurrentCurrencyContextProvider
