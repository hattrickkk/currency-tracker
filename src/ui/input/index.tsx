import { ChangeEvent } from 'react'

import * as styles from '@ui/input/style.module.scss'

type Props = {
    id: string
    value: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

function Input({ value, id, onChange }: Props) {
    return (
        <input
            className={styles.input}
            type='text'
            id={id}
            placeholder='Enter amount...'
            value={value}
            onChange={onChange}
        />
    )
}

export default Input
