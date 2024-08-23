import { BankPage } from '../page_objects/BankPage'

describe('Bank page testing', () => {
    const bank = new BankPage()

    it('engtering data in input', () => {
        bank.visit()
        bank.searchInput.should('have.value', 'USD')
        bank.searchInput.clear()
        bank.searchInput.type('b')
        bank.searchComplete.children().should('have.length', 2)
        bank.searchComplete.children().first().click()
        bank.searchInput.should('have.value', 'BTC')
        bank.searchInput.type('sdfghjk')
        bank.searchComplete.should('not.exist')
    })
})
