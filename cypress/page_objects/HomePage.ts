export class HomePage {
    visit() {
        cy.visit('/')
    }

    getNavLink(name: string) {
        return cy.contains(name)
    }

    getPopup() {
        return cy.getByDataCy('popup')
    }

    getDropdown() {
        return cy.getByDataCy('dropdown')
    }

    getThemeSwitcherLabel() {
        return cy.get('label[for=themeSwitcher]')
    }

    getThemeSwitcherBody() {
        return this.getThemeSwitcherLabel().find(':nth-child(2)')
    }

    getPopupInputs() {
        return this.getPopup().find('input')
    }
    
    clickThemeSwitcher() {
        this.getThemeSwitcherLabel().click()
    }
}
