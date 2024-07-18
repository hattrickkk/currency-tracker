import IBOV from '@assets/currencies/IBOV.svg'
import IFIX from '@assets/currencies/IFIX.svg'
import { IndexType } from '@customTypes/currency'

const INDEXES: IndexType[] = [
    {
        name: 'Bovespa Index',
        value: '0.15%',
        picture: IBOV,
    },
    {
        name: 'IFIX',
        value: '0.15%',
        picture: IFIX,
    },
]
export default INDEXES
