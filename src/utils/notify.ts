import toast from 'react-hot-toast'
import { BLACK, CURRENCY_CARD_BACK, GRAY, GREEN, WHITE } from '@constants/magicValues'

const notify = (days: number, isDark: boolean) => {
    const str = `The chart was successfully built for ${days} ${days === 1 ? 'day' : 'days'}!`

    toast.success(str, {
        style: {
            background: isDark ? CURRENCY_CARD_BACK : GRAY,
            color: isDark ? WHITE : BLACK,
        },
        iconTheme: {
            primary: GREEN,
            secondary: WHITE,
        },
    })
}

export default notify
