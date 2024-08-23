import React, { useContext, useEffect, useState } from 'react'
import { INIT_CURRENCY, INPUT_FROM_ID, INPUT_TO_ID } from '@constants/magicValues'
import THEMES from '@constants/themes'
import CurrencyContext from '@contexts/currencyContext'
import PopupContext from '@contexts/popupContext'
import ThemeContext from '@contexts/themeContext'
import { CurrencyContextType, ThemeContextType } from '@customTypes/context'
import { CurrencyCode } from '@customTypes/currency'
import Dropdown from '@ui/dropdown'
import Input from '@ui/input'
import convertCurrency from '@utils/convertCurrency'
import isFloat from '@utils/isFloat'
import clsx from 'clsx'

import * as styles from './style.module.scss'

function CurrencyConversionBlock() {
    const { theme } = useContext<ThemeContextType>(ThemeContext)
    const { data } = useContext<CurrencyContextType>(CurrencyContext)
    const { currentCurrency, isPopupOpen } = useContext(PopupContext)
    const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>(INIT_CURRENCY)

    const [firstInputValue, setFirstInputValue] = useState('0')
    const [secondInputValue, setSecondInputValue] = useState('0')

    const onInputChange = ({ target: { value, id } }: React.ChangeEvent<HTMLInputElement>) => {
        if (id === INPUT_FROM_ID) {
            setFirstInputValue(prev => (isFloat(value) ? value : prev))
            setSecondInputValue(
                convertCurrency(
                    data[currentCurrency.code][currentCurrency.code].value,
                    data[currentCurrency.code][selectedCurrency].value,
                    isFloat(value) ? value : firstInputValue
                )
            )
        } else {
            setFirstInputValue(
                convertCurrency(
                    data[currentCurrency.code][selectedCurrency].value,
                    data[currentCurrency.code][currentCurrency.code].value,
                    isFloat(value) ? value : secondInputValue
                )
            )
            setSecondInputValue(prev => (isFloat(value) ? value : prev))
        }
    }

    useEffect(() => {
        setSecondInputValue(
            convertCurrency(
                data[currentCurrency.code][currentCurrency.code].value,
                data[currentCurrency.code][selectedCurrency].value,
                firstInputValue
            )
        )
    }, [selectedCurrency, data, currentCurrency])

    useEffect(() => {
        setFirstInputValue('0')
        setSecondInputValue('0')
    }, [isPopupOpen])

    return (
        <div className={clsx(styles.inner, theme === THEMES.LIGHT && styles.light)}>
            <div className={styles.row}>
                <div className={styles.title}>
                    <p>{currentCurrency.name}</p>
                </div>
                <Input id={INPUT_FROM_ID} value={firstInputValue} onChange={onInputChange} maxLength={10} />
            </div>

            <div className={styles.row}>
                <div className={styles.title}>
                    <p>Convert to</p>
                    <Dropdown selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} />
                </div>
                <Input id={INPUT_TO_ID} value={secondInputValue} onChange={onInputChange} maxLength={10} />
            </div>
        </div>
    )
}

export default CurrencyConversionBlock
