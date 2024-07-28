describe('Timeline page testing', () => {
    it('should open notification by buttons generate', () => {
        cy.visit('/timeline')
        cy.contains('Generate for 30 days').click()
        cy.contains('The chart was successfully built for 30 days!')
        cy.contains('Generate for 15 days').click()
        cy.contains('The chart was successfully built for 15 days!')
    })

    it('should remove all', () => {
        cy.visit('/timeline')
        for (let i = 0; i < 4; i++) {
            cy.get('[data-cy="inputs-group"]:last-child')
                .find('input[type=text]')
                .each($el => {
                    cy.wrap($el).type(1)
                })
            cy.contains('button', 'Add').click()
        }
        cy.get('[data-cy="inputs-group"]:not(:last-child)').should('have.length', 4)
        cy.contains('Remove all').click()
        cy.get('[data-cy="inputs-group"]:not(:last-child)').should('have.length', 0)
    })

    it('prevent submiting from empty values', () => {
        cy.visit('/timeline')
        cy.get('input[type=date]').type('2024-07-28')
        cy.get('input[type=date]').should('have.value', '2024-07-28')

        cy.get('[data-cy="inputs-group"]')
            .find('input[type=text]')
            .each($el => {
                cy.wrap($el).type(234)
            })
        cy.get('[data-cy="inputs-group"]').find('input[type=text]').first().clear()
        cy.contains('button', 'Add').click()

        cy.get('[data-cy="inputs-group"]')
            .find('input[type=text]')
            .first()
            .should('have.css', 'box-shadow', 'rgb(234, 57, 67) 0px 0px 20px 0px')
    })

    it('add values to chart by inputing data in inputs, then delete it', () => {
        cy.visit('/reset')
        cy.visit('/timeline')

        cy.get('[data-cy="inputs-group"]')
            .find('input[type=text]')
            .each($el => {
                cy.wrap($el).type(12345)
            })
        cy.contains('button', 'Add').click()
        cy.contains('The chart was successfully built for 1 day!')

        cy.get('[data-cy="inputs-group"]:first-child')
            .find('input')
            .each($el => {
                cy.wrap($el).should('have.css', 'pointer-events', 'none')
            })

        cy.get('[data-cy="inputs-group"]:last-child')
            .find('input[type=text]')
            .each($el => {
                cy.wrap($el).type(12345)
            })
        cy.contains('button', 'Add').click()

        cy.get('[data-cy="inputs-group"]:first-child').find('[data-cy="inputs-group-close"]').find('span').click()

        cy.get('[data-cy="inputs-group-wrapper"]').should('have.length', 1)
        cy.contains('The chart was successfully built for 1 day!')
    })
})
