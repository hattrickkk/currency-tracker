export class TimelinePage {
    visit() {
        cy.visit('/timeline')
    }

    getAddButton() {
        return cy.contains('button', 'Add')
    }

    getDataInput() {
        return cy.get('input[type=date]')
    }

    getInputsForEnteringData() {
        return cy.get('[data-cy="inputs-group"]:last-child')
    }

    getAllDisabledValues() {
        return cy.get('[data-cy="inputs-group"]:not(:last-child)')
    }

    getFirstInputForEnteringData() {
        return this.getInputsForEnteringData().find('input[type=text]').first()
    }
    
    addButtonClick() {
        this.getAddButton().click()
    }

    addDataToChart(data: string) {
        this.getInputsForEnteringData()
            .find('input[type=text]')
            .each($el => {
                cy.wrap($el).type(data)
            })
        this.addButtonClick()
    }
}
