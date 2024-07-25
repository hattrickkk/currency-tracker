import React, { useContext, useEffect, useState } from 'react'
import { INIT_CURRENCY, INPUT_FROM_ID, INPUT_TO_ID, REGEX_FLOAT_NUMBERS } from '@constants/magicValues'
import PopupContext from '@contexts/popupContext'
import { CurrencyCode } from '@customTypes/currency'
import latest from '@mockData/latest'
import Dropdown from '@ui/dropdown'
import Input from '@ui/input'
import convertCurrency from '@utils/convertCurrency'

import * as styles from './style.module.scss'

function CurrencyConversionBlock() {
    const { currentCurrency, isPopupOpen } = useContext(PopupContext)
    const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>(INIT_CURRENCY)

    const [firstInputValue, setFirstInputValue] = useState('0')
    const [secondInputValue, setSecondInputValue] = useState('0')

    const onInputChange = ({ target: { value, id } }: React.ChangeEvent<HTMLInputElement>) => {
        if (id === INPUT_FROM_ID) {
            setFirstInputValue(prev => (REGEX_FLOAT_NUMBERS.test(value) ? value : prev))
            setSecondInputValue(
                convertCurrency(
                    latest.data[currentCurrency.code].value,
                    latest.data[selectedCurrency].value,
                    REGEX_FLOAT_NUMBERS.test(value) ? value : firstInputValue
                )
            )
        } else {
            setFirstInputValue(
                convertCurrency(
                    latest.data[selectedCurrency].value,
                    latest.data[currentCurrency.code].value,
                    REGEX_FLOAT_NUMBERS.test(value) ? value : secondInputValue
                )
            )
            setSecondInputValue(prev => (REGEX_FLOAT_NUMBERS.test(value) ? value : prev))
        }
    }

    useEffect(() => {
        setSecondInputValue(
            convertCurrency(
                latest.data[currentCurrency.code].value,
                latest.data[selectedCurrency].value,
                firstInputValue
            )
        )
    }, [selectedCurrency])

    useEffect(() => {
        setFirstInputValue('0')
        setSecondInputValue('0')
    }, [isPopupOpen])

    return (
        <div className={styles.inner}>
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
