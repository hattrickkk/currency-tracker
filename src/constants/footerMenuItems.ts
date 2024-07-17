import { FooterMenuItemType } from '@customTypes/menuItem'

const FOOTER_MENU_ITEMS: FooterMenuItemType[] = [
    {
        name: 'General',
        items: [
            {
                title: 'Market',
                path: '/general/market',
            },
            {
                title: 'Service',
                path: '/general/service',
            },
        ],
    },
    {
        name: 'Product',
        items: [
            {
                title: 'Sparks',
                path: '/general/sparks',
            },
            {
                title: 'Snaps',
                path: '/general/snaps',
            },
        ],
    },
    {
        name: 'Community',
        items: [
            {
                title: 'Ideas',
                path: '/general/sparks',
            },
            {
                title: 'Streams',
                path: '/general/streams',
            },
        ],
    },
]

export default FOOTER_MENU_ITEMS
