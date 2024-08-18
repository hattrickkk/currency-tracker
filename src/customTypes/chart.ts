export type CandleStickChartData = {
    x: string
    o: number
    h: number
    l: number
    c: number
    id: string
}

export type DataForChart = CandleStickChartData & { x: Date }

export type ChartData = {
    datasets: {
        data: DataForChart[]
    }[]
}

export type Price = {
    title: string
    id: string
}

export type ChartKeys = 'o' | 'c' | 'l' | 'h'
