import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react'
import { LOCAL_STORAGE_KEY } from '@constants/magicValues'
import THEMES from '@constants/themes'
import ThemeContext from '@contexts/themeContext'

type Props = {
    children: ReactElement
}

function ThemeContextProvider({ children }: Props) {
    const [theme, setTheme] = useState<THEMES>(() => {
        const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY)
        return savedTheme ? JSON.parse(savedTheme) : THEMES.DARK
    })
    const setDark = useCallback(() => setTheme(THEMES.DARK), [])
    const setLight = useCallback(() => setTheme(THEMES.LIGHT), [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(theme))
    }, [theme])

    const initValue = useMemo(() => {
        return { theme, setDark, setLight }
    }, [theme])

    return <ThemeContext.Provider value={initValue}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider
