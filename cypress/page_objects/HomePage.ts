export class HomePage {
    visit() {
        cy.visit('/')
    }

    getNavLink(name: string) {
        return cy.contains(name)
    }

    get popup() {
        return cy.getByDataCy('popup')
    }

    get dropdown() {
        return cy.getByDataCy('dropdown')
    }

    get themeSwitcherLabel() {
        return cy.get('label[for=themeSwitcher]')
    }

    get themeSwitcherBody() {
        return this.themeSwitcherLabel.find(':nth-child(2)')
    }

    get popupInputs() {
        return this.popup.find('input')
    }

    clickThemeSwitcher() {
        this.themeSwitcherLabel.click()
    }
}
