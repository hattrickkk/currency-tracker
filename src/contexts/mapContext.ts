import { createContext } from 'react'
import { MapContextType } from '@customTypes/context'

const MapContext = createContext<MapContextType>({} as MapContextType)
export default MapContext
