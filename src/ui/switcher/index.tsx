import React from 'react'

import * as styles from './style.module.scss'

function Switcher() {
    return (
        <div className={styles.switcher}>
            <label htmlFor='themeSwitcher' id='themeLabel'>
                <input type='checkbox' id='themeSwitcher' aria-labelledby='themeLabel' />
                <div className={styles.switcher__body} />
                <span className={styles.switcher__button} />
            </label>
        </div>
    )
}

export default React.memo(Switcher)
