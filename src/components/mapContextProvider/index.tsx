import { ReactElement, useMemo, useState } from 'react'
import { INIT_CURRENCY } from '@constants/magicValues'
import MapContext from '@contexts/mapContext'

type Props = {
    children: ReactElement
}

function MapContextProvider({ children }: Props) {
    const [searchingCurrency, setSearchingCurrency] = useState<string>(INIT_CURRENCY)

    const initValue = useMemo(() => {
        return { searchingCurrency, setSearchingCurrency }
    }, [searchingCurrency])

    return <MapContext.Provider value={initValue}>{children}</MapContext.Provider>
}

export default MapContextProvider
