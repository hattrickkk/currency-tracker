import { ReactElement, useCallback, useContext, useRef } from 'react'
import { createPortal } from 'react-dom'
import PopupContext from '@contexts/popupContext'
import useOutsidePopupClick from '@utils/hooks/useOutsidePopupClick'
import clsx from 'clsx'

import * as styles from '@styles/popup.module.scss'

type Props = {
    children: ReactElement
}

function Popup({ children }: Props) {
    const { closePopup, isPopupOpen } = useContext(PopupContext)

    const popupRef = useRef<HTMLInputElement>(null)
    useOutsidePopupClick(popupRef, closePopup, isPopupOpen, styles.popup)

    return createPortal(
        <div className={clsx(styles.popup, isPopupOpen && styles.active)}>
            <div className={clsx(styles.wrapper, isPopupOpen && styles.active)} ref={popupRef}>
                <div className={styles.btn}>
                    <span onClick={closePopup} />
                </div>
                {children}
            </div>
        </div>,
        document.body
    )
}

export default Popup
