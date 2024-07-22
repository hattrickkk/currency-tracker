export type Currency = {
    symbol: string
    name: string
    symbol_native: string
    decimal_digits: number
    rounding: number
    code: string
    name_plural: string
    type: string
    countries: string[]
}

export type CurrenciesResponse = {
    data: {
        [key: string]: Currency
    }
}

export type Index = {
    name: string
    value: string
    picture: string
}

export type CurrentCurrency = {
    name: string
    code: string
}

export type LatestData = {
    code: string
    value: number
}

export type Latest = {
    meta: {
        last_updated_at: string
    }
    data: {
        [key: string]: LatestData
    }
}

export type CurrencyCode = LatestData['code']
