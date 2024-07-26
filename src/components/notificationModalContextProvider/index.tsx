import { ReactElement, useMemo, useState } from 'react'
import { DAYS_FOR_NOTIFICATION } from '@constants/magicValues'
import NotificationModalContext from '@contexts/notificationModal'
import useModal from '@utils/hooks/useModal'

type Props = {
    children: ReactElement
}

function NotificationModalContextProvider({ children }: Props) {
    const { isOpen: isModalOpen, close: closeModal, open: openModal } = useModal()
    const [days, setDays] = useState(DAYS_FOR_NOTIFICATION)

    const openModalWithDays = (count: number) => {
        openModal()
        setDays(count)
    }

    const initValue = useMemo(() => {
        return { isModalOpen, closeModal, openModal, openModalWithDays, days }
    }, [isModalOpen])

    return <NotificationModalContext.Provider value={initValue}>{children}</NotificationModalContext.Provider>
}

export default NotificationModalContextProvider
