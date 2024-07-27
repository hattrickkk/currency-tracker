import { lazy } from 'react'
import * as paths from '@constants/paths'
import Routes from '@customTypes/routes'

const homePage = lazy(() => import('@pages/home'))
const timelinePage = lazy(() => import('@pages/timeline'))
const banksPage = lazy(() => import('@pages/banks'))
const contactsPage = lazy(() => import('@pages/contacts'))
const notFoundPage = lazy(() => import('@pages/notFound'))

export const ROUTES: Routes[] = [
    {
        path: paths.HOME,
        Elem: homePage,
    },
    {
        path: paths.TIMELINE,
        Elem: timelinePage,
    },
    {
        path: paths.BANK_CARD,
        Elem: banksPage,
    },
    {
        path: paths.CONTSCTS,
        Elem: contactsPage,
    },
]

export const ROUTES_NOT_FOUND: Routes[] = [
    {
        path: paths.NOT_FOUND,
        Elem: notFoundPage,
    },
    {
        path: paths.OTHER,
        Elem: notFoundPage,
    },
]
