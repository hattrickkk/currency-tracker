import { useContext, useRef } from 'react'
import { createPortal } from 'react-dom'
import NotificationModalContext from '@contexts/notificationModal'
import useOutsidePopupClick from '@utils/hooks/useOutsidePopupClick'
import clsx from 'clsx'

import * as modal from '@styles/popup.module.scss'
import * as styles from './style.module.scss'

function NotificationModal() {
    const { closeModal, isModalOpen, days } = useContext(NotificationModalContext)

    const modalRef = useRef<HTMLInputElement>(null)
    useOutsidePopupClick(modalRef, closeModal, isModalOpen, modal.popup)

    return createPortal(
        <div className={clsx(modal.popup, isModalOpen && modal.active)}>
            <div className={clsx(modal.wrapper, isModalOpen && modal.active)} ref={modalRef}>
                <div className={modal.btn}>
                    <span onClick={closeModal} />
                </div>
                <p className={styles.notification}>
                    The chart was successfully built for {days} {days === 1 ? 'day' : 'days'}!
                </p>
            </div>
        </div>,
        document.body
    )
}

export default NotificationModal
