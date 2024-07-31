import { expect } from '@jest/globals'
import isFloat from '@utils/isFloat'

describe('isFloat positive tests', () => {
    test('should return true for 0', () => {
        expect(isFloat('0')).toBe(true)
    })

    test('should return true for 123', () => {
        expect(isFloat('123')).toBe(true)
    })

    test('should return true for 0.123', () => {
        expect(isFloat('0.123')).toBe(true)
    })

    test('should return true for 123.456', () => {
        expect(isFloat('123.456')).toBe(true)
    })

    test('should return true for ".1"', () => {
        expect(isFloat('.1')).toBe(true)
    })
})

describe('isFloat negative tests', () => {
    test('should return false for string contains only letters', () => {
        expect(isFloat('abc')).toBe(false)
    })

    test('should return false for string contains letters and numbers', () => {
        expect(isFloat('123abc')).toBe(false)
    })

    test('should return false for string with more than 1 dot', () => {
        expect(isFloat('123.456.789')).toBe(false)
    })
})
