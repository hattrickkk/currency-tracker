import { BankPage } from '../page_objects/BankPage'

describe('Bank page testing', () => {
    const bank = new BankPage()

    it('engtering data in input', () => {
        bank.visit()
        bank.getSearchInput().should('have.value', 'USD')
        bank.getSearchInput().clear()
        bank.getSearchInput().type('b')
        bank.getsearchComplete().children().should('have.length', 2)
        bank.getsearchComplete().children().first().click()
        bank.getSearchInput().should('have.value', 'BTC')
        bank.getSearchInput().type('sdfghjk')
        bank.getsearchComplete().should('not.exist')
    })
})
