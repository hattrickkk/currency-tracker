import { Suspense, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '@components/banner'
import ErrorBoundary from '@components/errorBoundary'
import Footer from '@components/footer'
import Header from '@components/header'
import CurrencyContext from '@contexts/currencyContext'
import { CurrencyContextType } from '@customTypes/context'
import LastUpdated from '@ui/lastUpdated'
import Loader from '@ui/loader'

import * as styles from './styles.module.scss'

function Layout() {
    const { lastUpdated } = useContext<CurrencyContextType>(CurrencyContext)
    return (
        <div className={styles.wrapper}>
            <ErrorBoundary>
                <>
                    <Header />
                    <Banner />
                    <LastUpdated time={lastUpdated} />
                    <main className={styles.main}>
                        <Suspense fallback={<Loader />}>
                            <Outlet />
                        </Suspense>
                    </main>
                    <Footer />
                </>
            </ErrorBoundary>
        </div>
    )
}

export default Layout
