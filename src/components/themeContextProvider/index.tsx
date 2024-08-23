import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react'
import { LOCAL_STORAGE_KEY } from '@constants/magicValues'
import THEMES from '@constants/themes'
import ThemeContext from '@contexts/themeContext'
import useTheme from '@utils/hooks/useTheme'

type Props = {
    children: ReactElement
}

function ThemeContextProvider({ children }: Props) {
    const { theme, setTheme } = useTheme()
    const setDark = useCallback(() => setTheme(THEMES.DARK), [])
    const setLight = useCallback(() => setTheme(THEMES.LIGHT), [])

    const initValue = useMemo(() => {
        return { theme, setDark, setLight }
    }, [theme])

    return <ThemeContext.Provider value={initValue}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider
