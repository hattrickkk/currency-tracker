import { HomePage } from '../page_objects/HomePage'

describe('Home page testing', () => {
    const homePage = new HomePage()

    it('shoud open home page', () => {
        homePage.visit()
        cy.get('h1').should('contain', 'Modsen Currency')
    })
    it('change theme', () => {
        homePage.visit()

        homePage.clickThemeSwitcher()
        homePage.themeSwitcherBody.should('have.css', 'border', '1.6px solid rgb(3, 3, 4)')

        homePage.clickThemeSwitcher()
        homePage.themeSwitcherBody.should('have.css', 'border', '1.6px solid rgb(255, 255, 255)')
    })

    it('click to header nav', () => {
        homePage.visit()
        homePage.getNavLink('Timeline').click()
        cy.url().should('include', '/timeline')
        homePage.getNavLink('Bank').click()
        cy.url().should('include', '/bank')
        homePage.getNavLink('Contacts').click()
        cy.url().should('include', '/contacts')
    })

    it('open popup on firt element, type and convert value', () => {
        homePage.visit()
        cy.get('[data-cy="currency-card"]:first-child').click({ multiple: true })
        cy.getByDataCy('popup').should('have.css', 'pointer-events', 'all')
        cy.contains('Argentine Peso')
        homePage.popupInputs.first().type('123')
        homePage.popupInputs.last().should('have.value', '0.13')
        homePage.dropdown.click()
        homePage.dropdown.find('li:nth-child(5)').click()
        homePage.dropdown.contains('CNY')
        homePage.popup.find('input').last().should('have.value', '0.96')
        cy.getByDataCy('popup-close').click()
        homePage.popup.should('have.css', 'pointer-events', 'none')
    })
    it('get on notFound page and get back to home', () => {
        homePage.visit()
        cy.contains('Market').click()
        cy.contains('404')
        cy.contains('Click here').click()
        cy.url().should('include', '/')
    })
})
