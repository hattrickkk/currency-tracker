import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '@components/app'
import BurgerMenuContextProvider from '@components/burgerMenuContextProvider'
import CurrentCurrencyContextProvider from '@components/currentCurrencyContextProvider'

import '@styles/nullStyle.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <BurgerMenuContextProvider>
            <CurrentCurrencyContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </CurrentCurrencyContextProvider>
        </BurgerMenuContextProvider>
    </React.StrictMode>
)
