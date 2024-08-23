import { createContext } from 'react'
import { CurrencyContextType } from '@customTypes/context'

const CurrencyContext = createContext<CurrencyContextType>({} as CurrencyContextType)
export default CurrencyContext
