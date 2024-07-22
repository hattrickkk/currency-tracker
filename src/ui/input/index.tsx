import { ChangeEvent } from 'react'

import * as styles from './style.module.scss'

type Props = {
    id: string
    value: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    maxLength: number
}

function Input({ value, id, onChange, maxLength }: Props) {
    return (
        <input
            className={styles.input}
            type='text'
            id={id}
            placeholder='Enter amount...'
            value={value}
            onChange={onChange}
            maxLength={maxLength}
        />
    )
}

export default Input
