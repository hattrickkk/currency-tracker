import React, { ChangeEvent } from 'react'
import PropsType from 'prop-types'

import * as styles from '@ui/input/style.module.scss'

type PropsType = {
    placeholder: string
    id: string
    value: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

function Input({ placeholder, id, value, onChange }: PropsType) {
    return (
        <input
            className={styles.input}
            type='text'
            placeholder={placeholder}
            id={id}
            maxLength={10}
            value={value}
            onChange={onChange}
        />
    )
}

Input.propsType = {
    placeholder: PropsType.string.isRequired,
    id: PropsType.string.isRequired,
}

export default Input
