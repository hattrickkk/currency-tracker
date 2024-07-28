import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '@components/app'
import PopupContextProvider from '@components/popupContextProvider'
import ThemeContextProvider from '@components/themeContextProvider'

import '@styles/nullStyle.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <ThemeContextProvider>
            <PopupContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PopupContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>
)
