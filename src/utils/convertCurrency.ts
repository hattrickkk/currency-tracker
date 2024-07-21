const convertCurrency = (v1: number, v2: number, price: string): string => {
    return String((Number(price) * v2) / v1)
}

export default convertCurrency
