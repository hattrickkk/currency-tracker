import { createContext } from 'react'
import { BurgerMenuContextType } from 'types/context'

const BurgerMenuContext = createContext<BurgerMenuContextType>({} as BurgerMenuContextType)
export default BurgerMenuContext
