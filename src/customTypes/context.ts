import { CurrentCurrency } from '@customTypes/currency'

export type CurrentCurrencyContextType = {
    currentCurrency: CurrentCurrency
    setCurrentCurrency: React.Dispatch<React.SetStateAction<CurrentCurrency>>
    isPopupOpen: boolean
    openPopup: () => void
    closePopup: () => void
}
