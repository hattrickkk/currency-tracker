import { CandleStickChartData } from '@customTypes/chart'

const exchangeObjValidation = (current: CandleStickChartData, inputs: CandleStickChartData[]): CandleStickChartData => {
    let newExchange: CandleStickChartData =
        current.id === '' || inputs.map(el => el.id).includes(current.id)
            ? { ...current, id: new Date().toString() }
            : current

    Object.keys(newExchange).forEach(key => {
        if (key === 'x' || key === 'id') return
        if (newExchange[key as keyof CandleStickChartData] === '') {
            newExchange = {
                ...newExchange,
                [key as keyof CandleStickChartData]: 0,
            }
        }
    })

    return newExchange
}

export default exchangeObjValidation
