import { ReactElement, useCallback, useContext, useRef } from 'react'
import { createPortal } from 'react-dom'
import THEMES from '@constants/themes'
import PopupContext from '@contexts/popupContext'
import ThemeContext from '@contexts/themeContext'
import { ThemeContextType } from '@customTypes/context'
import useOutsidePopupClick from '@utils/hooks/useOutsidePopupClick'
import clsx from 'clsx'

import * as styles from './style.module.scss'

type Props = {
    children: ReactElement
}

function Popup({ children }: Props) {
    const { closePopup, isPopupOpen } = useContext(PopupContext)
    const { theme } = useContext<ThemeContextType>(ThemeContext)

    const popupRef = useRef<HTMLInputElement>(null)
    useOutsidePopupClick(popupRef, closePopup, isPopupOpen, styles.popup)

    return createPortal(
        <div
            className={clsx(styles.popup, isPopupOpen && styles.active, theme === THEMES.LIGHT && styles.light)}
            data-cy='popup'
        >
            <div className={clsx(styles.wrapper, isPopupOpen && styles.active)} ref={popupRef}>
                <div className={styles.btn}>
                    <span onClick={closePopup} data-cy='popup-close' />
                </div>
                {children}
            </div>
        </div>,
        document.body
    )
}

export default Popup
