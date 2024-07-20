import { ChangeEvent, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import CurrentCurrencyContext from '@contexts/currentCurrencyContext'
import latest from '@mockData/latest'
import Input from '@ui/input'
import clsx from 'clsx'

import * as styles from '@components/popup/style.module.scss'

const portal = document.getElementById('portal')

function Popup() {
    const { currentCurrency, closePopup, isPopupOpen } = useContext(CurrentCurrencyContext)

    const [firstInputValue, setFirstInputValue] = useState('0')
    const [secondInputValue, setSecondInputValue] = useState('0')

    const onCurrentCurrencyFirstInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const valueToConvert = 'USD'

        setFirstInputValue(e.currentTarget.value)
        setSecondInputValue(
            String(
                (Number(e.currentTarget.value) * Number(latest.data[valueToConvert].value)) /
                    Number(latest.data[currentCurrency.code].value)
            )
        )
    }
    const onCurrentCurrencySecondInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const valueToConvert = 'USD'
        setSecondInputValue(e.currentTarget.value)
        setFirstInputValue(
            String(
                (Number(e.currentTarget.value) * Number(latest.data[currentCurrency.code].value)) /
                    Number(latest.data[valueToConvert].value)
            )
        )
    }

    return createPortal(
        <div className={isPopupOpen ? clsx([styles.popup, styles.active]) : styles.popup}>
            <div className={styles.popup__wrapper}>
                <div className={styles.popup__btn} onClick={closePopup}>
                    <span />
                </div>
                <div className={styles.popup__inner}>
                    <label className={styles.popup__label} htmlFor={currentCurrency.code}>
                        <span>{currentCurrency.name}</span>
                        <Input
                            placeholder='Currency'
                            id={currentCurrency.code}
                            value={firstInputValue}
                            onChange={onCurrentCurrencyFirstInputChange}
                        />
                    </label>
                    <label className={styles.popup__label} htmlFor='USD'>
                        <span>US Dollar</span>
                        <Input
                            placeholder='US Dollar'
                            id='USD'
                            value={secondInputValue}
                            onChange={onCurrentCurrencySecondInputChange}
                        />
                    </label>
                </div>
            </div>
        </div>,
        portal
    )
}

export default Popup
