export type CurrencyType = {
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

export type CurrenciesResponseType = {
    data: {
        [key: string]: CurrencyType
    }
}

export type IndexType = {
    name: string
    value: string
    picture: string
}
