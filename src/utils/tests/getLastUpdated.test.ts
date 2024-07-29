import { expect } from '@jest/globals'
import getLastUpdated from '@utils/getLastUpdated'

describe('getLastUpdated tests', () => {
    it('00:00', () => {
        expect(getLastUpdated('2023-07-29T00:00:00Z')).toBe('Last updated at 12.0 am')
    })

    it('12:00', () => {
        expect(getLastUpdated('2023-07-29T12:00:00Z')).toBe('Last updated at 12.0 am')
    })

    it('05:30', () => {
        expect(getLastUpdated('2023-07-29T05:30:00Z')).toBe('Last updated at 5.30 am')
    })

    it('14:45', () => {
        expect(getLastUpdated('2023-07-29T14:45:00Z')).toBe('Last updated at 2.45 pm')
    })

    it('23:59', () => {
        expect(getLastUpdated('2023-07-29T23:59:00Z')).toBe('Last updated at 11.59 pm')
    })
})
