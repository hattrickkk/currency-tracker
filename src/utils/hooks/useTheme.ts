import { useEffect, useState } from 'react'
import { LOCAL_STORAGE_KEY } from '@constants/magicValues'
import THEMES from '@constants/themes'

type ReturnType = {
    theme: THEMES
    setTheme: React.Dispatch<React.SetStateAction<THEMES>>
}
const useTheme = (): ReturnType => {
    const [theme, setTheme] = useState<THEMES>(() => {
        const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY)
        return savedTheme ? JSON.parse(savedTheme) : THEMES.DARK
    })
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(theme))
    }, [theme])

    return { theme, setTheme }
}
export default useTheme
