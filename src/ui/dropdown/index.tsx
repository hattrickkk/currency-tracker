import React, { useContext, useEffect, useRef } from 'react'
import PopupContext from '@contexts/popupContext'
import { CurrencyCode } from '@customTypes/currency'
import CURRENCIES_NAMES_ARR from '@mockData/currenciesNames'
import useModal from '@utils/hooks/useModal'
import useOutsideDropdownClick from '@utils/hooks/useOutsideDropdownClick'
import clsx from 'clsx'

import * as styles from './style.module.scss'

type Props = {
    selectedCurrency: CurrencyCode
    setSelectedCurrency: React.Dispatch<React.SetStateAction<CurrencyCode>>
}

function Dropdown({ selectedCurrency, setSelectedCurrency }: Props) {
    const { isOpen, close: closeDropdown, open: openDropdown } = useModal()
    const { isPopupOpen } = useContext(PopupContext)

    const dropdownButtonClickHandler = () => {
        isOpen ? closeDropdown() : openDropdown()
    }

    const dropdownItemClickHandler = (code: CurrencyCode) => () => {
        setSelectedCurrency(code)
        closeDropdown()
    }

    const dropdownRef = useRef<HTMLInputElement>(null)
    useOutsideDropdownClick(dropdownRef, closeDropdown)

    useEffect(() => {
        if (!isPopupOpen) closeDropdown()
    }, [isPopupOpen])

    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <div className={clsx(styles.button, isOpen && styles.active)} onClick={dropdownButtonClickHandler}>
                {selectedCurrency}
            </div>
            <div className={clsx(styles.itemsWrapper, isOpen && styles.active)}>
                <ul className={styles.items}>
                    {CURRENCIES_NAMES_ARR.map(code => (
                        <li key={code} className={styles.item} onClick={dropdownItemClickHandler(code)}>
                            {code}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default React.memo(Dropdown)
