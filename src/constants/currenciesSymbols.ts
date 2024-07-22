import ARS from '@assets/currencies/ARS.svg'
import AUD from '@assets/currencies/AUD.svg'
import BTC from '@assets/currencies/BTC.svg'
import CAD from '@assets/currencies/CAD.svg'
import CNY from '@assets/currencies/CNY.svg'
import EUR from '@assets/currencies/EUR.svg'
import GBP from '@assets/currencies/GBP.svg'
import JPY from '@assets/currencies/JPY.svg'
import USD from '@assets/currencies/USD.svg'

type Symbols = {
    [key: string]: string
}

const CURRENCIES_SYMBOLS: Symbols = {
    ARS,
    USD,
    EUR,
    GBP,
    JPY,
    CNY,
    CAD,
    BTC,
    AUD,
}
export default CURRENCIES_SYMBOLS
