export class BankPage {
    visit() {
        cy.visit('/bank-card')
    }

    getSearchInput() {
        return cy.get('input[id=search-id]')
    }

    getsearchComplete() {
        return cy.getByDataCy('search-complete')
    }
}
