import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '@components/app'
import CombinedProvider from '@components/compinedProvider'

import '@styles/nullStyle.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <CombinedProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CombinedProvider>
    </React.StrictMode>
)
