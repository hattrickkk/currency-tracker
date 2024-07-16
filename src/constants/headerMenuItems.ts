import * as paths from '@constants/paths'

type HeaderMenuItemType = {
    path: string
    title: string
}

const HEADER_MENU_ITEMS: HeaderMenuItemType[] = [
    {
        path: paths.HOME,
        title: 'Home',
    },
    {
        path: paths.TIMELINE,
        title: 'Timeline',
    },
    {
        path: paths.BANK_CARD,
        title: 'Bank card',
    },
    {
        path: paths.CONTSCTS,
        title: 'Contacts',
    },
]

export default HEADER_MENU_ITEMS
