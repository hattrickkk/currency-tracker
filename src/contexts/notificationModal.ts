import { createContext } from 'react'
import { NotificationModalContextType } from '@customTypes/context'

const NotificationModalContext = createContext<NotificationModalContextType>({} as NotificationModalContextType)
export default NotificationModalContext
