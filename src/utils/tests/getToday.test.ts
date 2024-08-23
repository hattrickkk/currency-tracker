import { expect } from '@jest/globals'
import getToday from '@utils/getToday'

describe('getToday tests', () => {
    it('should return a date with leading zeros for month and day', () => {
        const mockDate = new Date(2024, 0, 1)
        global.Date = jest.fn(() => mockDate) as unknown as DateConstructor
        expect(getToday()).toBe('2024-01-01')
    })
})
