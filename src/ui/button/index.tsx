import React from 'react'
import clsx from 'clsx'

import * as styles from './style.module.scss'

type Props = {
    value: string
    onClick: VoidFunction
    secondary?: boolean
    disabled?: boolean
}

function Button({ value, onClick, secondary, disabled }: Props) {
    return (
        <button
            className={clsx(styles.button, secondary && styles.secondary, disabled && styles.disabled)}
            onClick={onClick}
            type='button'
        >
            <span>{value}</span>
        </button>
    )
}

export default Button
