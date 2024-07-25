import { ReactElement, useMemo } from 'react'
import NotificationModalContext from '@contexts/notificationModal'
import useModal from '@utils/hooks/useModal'

type Props = {
    children: ReactElement
}

function NotificationModalContextProvider({ children }: Props) {
    const { isOpen: isModalOpen, close: closeModal, open: openModal } = useModal()

    const initValue = useMemo(() => {
        return { isModalOpen, closeModal, openModal }
    }, [isModalOpen])

    return <NotificationModalContext.Provider value={initValue}>{children}</NotificationModalContext.Provider>
}

export default NotificationModalContextProvider
