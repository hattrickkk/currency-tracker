import CURRENCIES_NAMES_ARR from '@constants/currenciesNames'
import { CurrentCurrency, Latest, LatestValues } from '@customTypes/currency'

const getLatest = async (): Promise<LatestValues> => {
    const LatestValuesObj: LatestValues = {
        lastUpdated: '',
        data: {},
    }

    const promises: Promise<Latest>[] = CURRENCIES_NAMES_ARR.map(async ({ code }: CurrentCurrency) => {
        const currencies = CURRENCIES_NAMES_ARR.map(el => el.code).join(',')
        const url = `https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_API_KEY}&currencies=${currencies}&base_currency=${code}`
        const response = await fetch(url)
        const result = await response.json()
        return result
    })

    const responses: Latest[] = await Promise.all(promises)
    responses.forEach(({ data, meta }: Latest, i) => {
        LatestValuesObj.lastUpdated = meta.last_updated_at
        LatestValuesObj.data[CURRENCIES_NAMES_ARR[i].code] = data
    })

    return LatestValuesObj
}
export default getLatest
