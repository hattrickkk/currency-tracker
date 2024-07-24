import { CandleStickChartData } from '@customTypes/chart'
import getToday from '@utils/getToday'

const INIT_CANDLESTICK_CHART_VALUES: CandleStickChartData = {
    x: getToday(),
    o: 0,
    c: 0,
    l: 0,
    h: 0,
    id: '',
}

export default INIT_CANDLESTICK_CHART_VALUES
