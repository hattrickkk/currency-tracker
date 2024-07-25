import AppRoutes from '@components/appRoutes'

import * as global from '@styles/global.module.scss'

function App() {
    return (
        <div className={global.wrapper}>
            <AppRoutes />
        </div>
    )
}

export default App
