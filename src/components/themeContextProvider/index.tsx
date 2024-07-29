import { ReactElement, useCallback, useMemo, useState } from 'react'
import THEMES from '@constants/themes'
import ThemeContext from '@contexts/themeContext'

type Props = {
    children: ReactElement
}

function ThemeContextProvider({ children }: Props) {
    const [theme, setTheme] = useState<THEMES>(THEMES.DARK)
    const setDark = useCallback(() => setTheme(THEMES.DARK), [])
    const setLight = useCallback(() => setTheme(THEMES.LIGHT), [])

    const initValue = useMemo(() => {
        return { theme, setDark, setLight }
    }, [theme])

    return <ThemeContext.Provider value={initValue}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider
