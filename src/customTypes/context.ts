import { CurrentCurrency } from '@customTypes/currency'

export type PopupContextType = {
    currentCurrency: CurrentCurrency
    setCurrentCurrency: React.Dispatch<React.SetStateAction<CurrentCurrency>>
    isPopupOpen: boolean
    openPopup: VoidFunction
    closePopup: VoidFunction
}
