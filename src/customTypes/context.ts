import THEMES from '@constants/themes'
import { CurrentCurrency, LatestValues } from '@customTypes/currency'

export type PopupContextType = {
    currentCurrency: CurrentCurrency
    setCurrentCurrency: React.Dispatch<React.SetStateAction<CurrentCurrency>>
    isPopupOpen: boolean
    openPopup: VoidFunction
    closePopup: VoidFunction
}

export type ThemeContextType = {
    theme: THEMES
    setDark: VoidFunction
    setLight: VoidFunction
}

export type CurrencyContextType = LatestValues
