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

export type LatestValues = {
    lastUpdated: string
    data: {
        [key: CurrencyCode]: {
            [key: CurrencyCode]: LatestData
        }
    }
}

export type CurrencyCode = CurrentCurrency['code']
