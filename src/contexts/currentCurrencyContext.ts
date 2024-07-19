import { createContext } from 'react'
import { CurrentCurrencyContextType } from '@customTypes/context'

const CurrentCurrencyContext = createContext<CurrentCurrencyContextType>({} as CurrentCurrencyContextType)
export default CurrentCurrencyContext
