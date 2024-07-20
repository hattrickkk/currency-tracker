import * as paths from '@constants/paths'
import { MenuItem } from '@customTypes/menuItem'

const HEADER_MENU_ITEMS: MenuItem[] = [
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
