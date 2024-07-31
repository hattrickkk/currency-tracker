import { ReactElement, useMemo, useState } from 'react'
import CURRENCIES_NAMES_ARR from '@constants/currenciesNames'
import { INIT_CURRENCY } from '@constants/magicValues'
import PopupContext from '@contexts/popupContext'
import { CurrentCurrency } from '@customTypes/currency'
import useModal from '@utils/hooks/useModal'

type Props = {
    children: ReactElement
}

function PopupContextProvider({ children }: Props) {
    const { isOpen: isPopupOpen, close: closePopup, open: openPopup } = useModal()
    const [currentCurrency, setCurrentCurrency] = useState<CurrentCurrency>(() =>
        CURRENCIES_NAMES_ARR.find(({ code }) => code === INIT_CURRENCY)
    )

    const initValue = useMemo(() => {
        return { currentCurrency, setCurrentCurrency, isPopupOpen, openPopup, closePopup }
    }, [currentCurrency, isPopupOpen])

    return <PopupContext.Provider value={initValue}>{children}</PopupContext.Provider>
}

export default PopupContextProvider
