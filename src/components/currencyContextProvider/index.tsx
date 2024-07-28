import { ReactElement, useEffect, useMemo, useState } from 'react'
import CurrencyContext from '@contexts/currencyContext'
import { CurrencyContextType } from '@customTypes/context'
import LATEST_VALUES from '@mockData/latest'
import getLatest from '@utils/getLatest'

type Props = {
    children: ReactElement
}

function CurrencyContextProvider({ children }: Props) {
    const [latestValues, setLatestValues] = useState<CurrencyContextType>(LATEST_VALUES)

    useEffect(() => {
        getLatest().then(res => setLatestValues(res))
    }, [])

    const initValue = useMemo(() => {
        return { ...latestValues }
    }, [latestValues])

    return <CurrencyContext.Provider value={initValue}>{children}</CurrencyContext.Provider>
}

export default CurrencyContextProvider
