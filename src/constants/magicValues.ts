import { ChartTypeRegistry } from 'chart.js'

export const INIT_CURRENCY: string = 'USD'

export const INPUT_FROM_ID: string = 'INPUT_FROM'
export const INPUT_TO_ID: string = 'INPUT_TO'

export const MAX_COUNT_OF_HOURS: number = 12
export const ANTE_MERIDIEM: string = 'am'
export const POST_MERIDIEM: string = 'pm'

export const REGEX_FLOAT_NUMBERS: RegExp = /^\d*\.?\d*$/

export const CHART_TYPE: keyof ChartTypeRegistry = 'candlestick'

export const MAX_DAYS: number = 60
export const DAYS_FOR_NOTIFICATION: number = 30

export const GRID_COLOR: string = 'rgba(255, 255, 255, 0.1)'
export const GRID_BORDER: string = 'rgba(255, 255, 255, 0.3)'
export const CHART_VALUES_COLOR: string = '#FFF'
export const CHART_VALUES_PADDING: number = 10