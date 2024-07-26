import { forwardRef, useImperativeHandle, useRef } from 'react'

import * as global from '@styles/global.module.scss'
import * as styles from './style.module.scss'

type Props = {
    id: string
    value: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    maxLength: number
    placeholder?: string
}

type InputHandle = {
    highlightElem: VoidFunction
    getValue: () => string
    resetValue: VoidFunction
}

const Input = forwardRef<InputHandle, Props>(({ value, id, onChange, maxLength, placeholder }: Props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
        highlightElem: () => inputRef.current.classList.add(global.require),
        getValue: () => inputRef.current.value,
        resetValue: () => (inputRef.current.value = '0'),
    }))

    return (
        <input
            className={styles.input}
            type='text'
            id={id}
            placeholder={placeholder || 'Enter amount...'}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            ref={inputRef}
        />
    )
})
Input.displayName = 'Input'
export default Input
