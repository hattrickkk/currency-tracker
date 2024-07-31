import React from 'react'
import CurrencyContextProvider from '@components/currencyContextProvider'
import PopupContextProvider from '@components/popupContextProvider'
import ThemeContextProvider from '@components/themeContextProvider'

type Props = {
    children: React.ReactElement
}
function CombinedProvider({ children }: Props) {
    return (
        <ThemeContextProvider>
            <CurrencyContextProvider>
                <PopupContextProvider>{children}</PopupContextProvider>
            </CurrencyContextProvider>
        </ThemeContextProvider>
    )
}

export default CombinedProvider
