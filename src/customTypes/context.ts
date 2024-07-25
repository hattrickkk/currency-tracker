import { CurrentCurrency } from '@customTypes/currency'

export type PopupContextType = {
    currentCurrency: CurrentCurrency
    setCurrentCurrency: React.Dispatch<React.SetStateAction<CurrentCurrency>>
    isPopupOpen: boolean
    openPopup: VoidFunction
    closePopup: VoidFunction
}

export type NotificationModalContextType = {
    isModalOpen: boolean
    openModal: VoidFunction
    closeModal: VoidFunction
}
