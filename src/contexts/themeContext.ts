import { createContext } from 'react'
import { ThemeContextType } from '@customTypes/context'

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)
export default ThemeContext
