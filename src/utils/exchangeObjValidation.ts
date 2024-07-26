import { CandleStickChartData } from '@customTypes/chart'

const exchangeObjValidation = (current: CandleStickChartData, inputs: CandleStickChartData[]): CandleStickChartData => {
    return Object.keys(current).reduce((acum, key) => {
        if (key === 'id') {
            if (current.id === '' || inputs.map(el => el.id).includes(current.id)) {
                return {
                    ...acum,
                    id: new Date().toString(),
                }
            }
        } else if (current[key as keyof CandleStickChartData] === '') {
            return {
                ...acum,
                [key as keyof CandleStickChartData]: 0,
            }
        }
        return acum
    }, current) as CandleStickChartData
}

export default exchangeObjValidation
