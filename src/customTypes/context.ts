import { CurrentCurrency } from '@customTypes/currency'

export type BurgerMenuContextType = {
    isOpen: boolean
    openMenu: () => void
    closeMenu: () => void
}

export type CurrentCurrencyContextType = {
    currentCurrency: CurrentCurrency
    setCurrentCurrency: React.Dispatch<React.SetStateAction<CurrentCurrency>>
    isPopupOpen: boolean
    openPopup: () => void
    closePopup: () => void
}
