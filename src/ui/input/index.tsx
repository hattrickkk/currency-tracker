import * as styles from './style.module.scss'

type Props = {
    id: string
    value: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    maxLength: number
    placeholder?: string
}

function Input({ value, id, onChange, maxLength, placeholder }: Props) {
    return (
        <input
            className={styles.input}
            type='text'
            id={id}
            placeholder={placeholder || 'Enter amount...'}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
        />
    )
}

export default Input
