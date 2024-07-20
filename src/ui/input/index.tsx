import { ChangeEvent } from 'react'

import * as styles from '@ui/input/style.module.scss'

type Props = {
    placeholder: string
    id: string
    value: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

function Input({ placeholder, id, value, onChange }: Props) {
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

export default Input
