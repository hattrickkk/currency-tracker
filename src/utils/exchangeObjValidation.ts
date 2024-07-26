import { CandleStickChartData } from '@customTypes/chart'

const exchangeObjValidation = (current: CandleStickChartData, inputs: CandleStickChartData[]): CandleStickChartData => {
    return Object.keys(current).reduce((acum, key: keyof CandleStickChartData) => {
        if (key === 'id') {
            if (current.id === '' || inputs.map(el => el.id).includes(current.id)) {
                return {
                    ...acum,
                    id: new Date().toString(),
                }
            }
        } else if (current[key] === '') {
            return {
                ...acum,
                [key]: 0,
            }
        }
        return acum
    }, current)
}

export default exchangeObjValidation
