import React, { useCallback, useContext } from 'react'
import THEMES from '@constants/themes'
import ThemeContext from '@contexts/themeContext'
import { ThemeContextType } from '@customTypes/context'

import * as styles from './style.module.scss'

function Switcher() {
    const { theme, setDark, setLight } = useContext<ThemeContextType>(ThemeContext)

    const switcherClickHandler = useCallback(() => {
        theme === THEMES.DARK ? setLight() : setDark()
    }, [theme])

    return (
        <div className={styles.switcher}>
            <label htmlFor='themeSwitcher' id='themeLabel'>
                <input
                    onClick={switcherClickHandler}
                    type='checkbox'
                    id='themeSwitcher'
                    aria-labelledby='themeLabel'
                    defaultChecked={theme === THEMES.LIGHT}
                />
                <div className={styles.switcher__body} />
                <span className={styles.switcher__button} />
            </label>
        </div>
    )
}

export default React.memo(Switcher)
