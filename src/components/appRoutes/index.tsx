import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '@components/layout'
import * as paths from '@constants/paths'
import { ROUTES, ROUTES_NOT_FOUND } from '@constants/routes'
import Loader from '@ui/loader'

function AppRoutes() {
    return (
        <Routes>
            <Route path={paths.HOME} element={<Layout />}>
                {ROUTES.map(({ path, Elem }) => (
                    <Route key={path} path={path} element={<Elem />} />
                ))}
            </Route>
            {ROUTES_NOT_FOUND.map(({ path, Elem }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<Loader />}>
                            <Elem />
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    )
}

export default AppRoutes
