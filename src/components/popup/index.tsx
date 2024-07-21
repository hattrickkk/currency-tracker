import { ChangeEvent, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { INIT_CURRENCY, INPUT_FROM_ID, INPUT_TO_ID } from '@constants/magicValues'
import PopupContext from '@contexts/popupContext'
import { CurrencyCode } from '@customTypes/currency'
import latest from '@mockData/latest'
import Dropdown from '@ui/dropdown'
import Input from '@ui/input'
import convertCurrency from '@utils/convertCurrency'
import useOutsidePopupClick from '@utils/hooks/useOutsidePopupClick'
import clsx from 'clsx'

import * as styles from './style.module.scss'

function Popup() {
    const { currentCurrency, closePopup, isPopupOpen } = useContext(PopupContext)
    const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>(INIT_CURRENCY)

    const [firstInputValue, setFirstInputValue] = useState('0')
    const [secondInputValue, setSecondInputValue] = useState('0')

    const popupBtnClickHandler = useCallback(() => {
        closePopup()
        setFirstInputValue('0')
        setSecondInputValue('0')
    }, [])

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === INPUT_FROM_ID) {
            setFirstInputValue(e.currentTarget.value)
            setSecondInputValue(
                convertCurrency(
                    latest.data[currentCurrency.code].value,
                    latest.data[selectedCurrency].value,
                    e.currentTarget.value
                )
            )
        } else {
            setFirstInputValue(
                convertCurrency(
                    latest.data[selectedCurrency].value,
                    latest.data[currentCurrency.code].value,
                    e.currentTarget.value
                )
            )
            setSecondInputValue(e.currentTarget.value)
        }
    }

    const popupRef = useRef<HTMLInputElement>(null)
    useOutsidePopupClick(popupRef, closePopup, isPopupOpen, styles.popup)

    useEffect(() => {
        setSecondInputValue(
            convertCurrency(
                latest.data[currentCurrency.code].value,
                latest.data[selectedCurrency].value,
                firstInputValue
            )
        )
    }, [selectedCurrency])

    return createPortal(
        <div className={clsx(styles.popup, isPopupOpen && styles.active)}>
            <div className={clsx(styles.wrapper, isPopupOpen && styles.active)} ref={popupRef}>
                <div className={styles.btn}>
                    <span onClick={popupBtnClickHandler} />
                </div>
                <div className={styles.inner}>
                    <div className={styles.row}>
                        <div className={styles.title}>
                            <p>{currentCurrency.name}</p>
                        </div>
                        <Input id={INPUT_FROM_ID} value={firstInputValue} onChange={onInputChange} />
                    </div>

                    <div className={styles.row}>
                        <div className={styles.title}>
                            <p>Convert to</p>
                            <Dropdown selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} />
                        </div>
                        <Input id={INPUT_TO_ID} value={secondInputValue} onChange={onInputChange} />
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default Popup
