export class TimelinePage {
    visit() {
        cy.visit('/timeline')
    }

    get addButton() {
        return cy.contains('button', 'Add')
    }

    get dataInput() {
        return cy.get('input[type=date]')
    }

    get inputsForEnteringData() {
        return cy.get('[data-cy="inputs-group"]:last-child')
    }

    get allDisabledValues() {
        return cy.get('[data-cy="inputs-group"]:not(:last-child)')
    }

    get firstInputForEnteringData() {
        return this.inputsForEnteringData.find('input[type=text]').first()
    }

    addButtonClick() {
        this.addButton.click()
    }

    addDataToChart(data: string) {
        this.inputsForEnteringData.find('input[type=text]').each($el => {
            cy.wrap($el).type(data)
        })
        this.addButtonClick()
    }
}
