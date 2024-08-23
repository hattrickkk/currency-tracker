export class BankPage {
    visit() {
        cy.visit('/bank-card')
    }

    get searchInput() {
        return cy.get('input[id=search-id]')
    }

    get searchComplete() {
        return cy.getByDataCy('search-complete')
    }
}
