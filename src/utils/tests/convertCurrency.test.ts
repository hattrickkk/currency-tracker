import { expect } from '@jest/globals'
import convertCurrency from '@utils/convertCurrency'

describe('convertCurrency tests', () => {
    it('conversion with same rates', () => {
        expect(convertCurrency(1, 1, '100')).toBe('100.00')
    })

    it('conversion with different rates', () => {
        expect(convertCurrency(1, 2, '100')).toBe('200.00')
    })

    it('conversion with fractional rates', () => {
        expect(convertCurrency(1, 0.5, '100')).toBe('50.00')
    })

    it('conversion with fractional price', () => {
        expect(convertCurrency(1, 2, '123.45')).toBe('246.90')
    })

    it('conversion with fractional rates and price', () => {
        expect(convertCurrency(1.5, 2.5, '100.25')).toBe('167.08')
    })

    it('conversion with zero price', () => {
        expect(convertCurrency(1, 2, '0')).toBe('0.00')
    })

    it('conversion with negative rates', () => {
        expect(convertCurrency(-1, -2, '100')).toBe('200.00')
    })
})
