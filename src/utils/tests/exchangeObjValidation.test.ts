import { CandleStickChartData } from '@customTypes/chart'
import { expect } from '@jest/globals'
import exchangeObjValidation from '@utils/exchangeObjValidation'

describe('exchangeObjValidation tests', () => {
    const inputs: CandleStickChartData[] = [{ x: '2023-07-29T00:00:00Z', o: 100, h: 150, l: 90, c: 120, id: 'some-id' }]

    it('current object with empty id', () => {
        const current: CandleStickChartData = { x: '2023-07-29T00:00:00Z', o: 100, h: 150, l: 90, c: 120, id: '' }
        const result = exchangeObjValidation(current, inputs)
        expect(result.id).not.toBe('')
        expect(result.id).toBe(new Date().toString())
    })

    it('current object with id that exists in inputs', () => {
        const current: CandleStickChartData = {
            x: '2023-07-29T00:00:00Z',
            o: 100,
            h: 150,
            l: 90,
            c: 120,
            id: 'some-id',
        }
        const result = exchangeObjValidation(current, inputs)
        expect(result.id).not.toBe('')
        expect(result.id).toBe(new Date().toString())
    })

    it('current object with valid values and unique id', () => {
        const current: CandleStickChartData = {
            x: '2023-07-29T00:00:00Z',
            o: 100,
            h: 150,
            l: 90,
            c: 120,
            id: 'unique-id',
        }
        const result = exchangeObjValidation(current, inputs)
        expect(result).toEqual(current)
    })
})
