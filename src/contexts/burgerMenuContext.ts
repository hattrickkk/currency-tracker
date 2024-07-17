import { createContext } from 'react'
import { BurgerMenuContextType } from '@customTypes/context'

const BurgerMenuContext = createContext<BurgerMenuContextType>({} as BurgerMenuContextType)
export default BurgerMenuContext
