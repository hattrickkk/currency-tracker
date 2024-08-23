import { forwardRef, useContext, useImperativeHandle, useRef } from 'react'
import THEMES from '@constants/themes'
import ThemeContext from '@contexts/themeContext'
import { ThemeContextType } from '@customTypes/context'
import clsx from 'clsx'

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
    const { theme } = useContext<ThemeContextType>(ThemeContext)
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
        highlightElem: () => inputRef.current.classList.add(global.require),
        getValue: () => inputRef.current.value,
        resetValue: () => (inputRef.current.value = '0'),
    }))

    return (
        <input
            className={clsx(styles.input, theme === THEMES.LIGHT && styles.light)}
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
