import { Toaster } from 'react-hot-toast'
import AppRoutes from '@components/appRoutes'

import * as global from '@styles/global.module.scss'

function App() {
    return (
        <div className={global.wrapper}>
            <AppRoutes />
            <Toaster position='top-right' reverseOrder />
        </div>
    )
}

export default App
