import { createContext } from 'react'
import { PopupContextType } from '@customTypes/context'

const PopupContext = createContext<PopupContextType>({} as PopupContextType)
export default PopupContext
