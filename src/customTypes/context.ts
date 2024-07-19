import { CurrentCurrencyType } from '@customTypes/currency'

export type BurgerMenuContextType = {
    isOpen: boolean
    openMenu: () => void
    closeMenu: () => void
}

export type CurrentCurrencyContextType = {
    currentCurrency: CurrentCurrencyType
    setCurrentCurrency: React.Dispatch<React.SetStateAction<CurrentCurrencyType>>
    isPopupOpen: boolean
    openPopup: () => void
    closePopup: () => void
}
