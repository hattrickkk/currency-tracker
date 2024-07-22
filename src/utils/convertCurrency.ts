const convertCurrency = (v1: number, v2: number, price: string): string => {
    return ((Number(price) * v2) / v1).toFixed(2)
}

export default convertCurrency
