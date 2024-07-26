import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '@components/banner'
import ErrorBoundary from '@components/errorBoundary'
import Footer from '@components/footer'
import Header from '@components/header'
import LastUpdated from '@ui/lastUpdated'
import Loader from '@ui/loader'

import * as styles from './styles.module.scss'

function Layout() {
    return (
        <div className={styles.wrapper}>
            <ErrorBoundary>
                <>
                    <Header />
                    <Banner />
                    <LastUpdated time='2024-07-10T23:59:59Z' />
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
