import { TimelinePage } from '../page_objects/TimelinePage'

describe('Timeline page testing', () => {
    const timeline = new TimelinePage()

    it('should open notification by buttons generate', () => {
        timeline.visit()
        cy.contains('Generate for 30 days').click()
        cy.contains('The chart was successfully built for 30 days!')
        cy.contains('Generate for 15 days').click()
        cy.contains('The chart was successfully built for 15 days!')
    })

    it('should remove all', () => {
        timeline.visit()
        for (let i = 0; i < 4; i++) {
            timeline.addDataToChart(i.toString())
        }
        timeline.allDisabledValues.should('have.length', 3)
        cy.contains('Remove all').click()
        timeline.allDisabledValues.should('have.length', 0)
    })

    it('prevent submiting from empty values', () => {
        timeline.visit()
        timeline.dataInput.type('2024-07-28')
        timeline.dataInput.should('have.value', '2024-07-28')

        timeline.addDataToChart('1')

        timeline.firstInputForEnteringData.clear()
        timeline.addButtonClick()

        timeline.firstInputForEnteringData.should('have.css', 'box-shadow', 'rgb(234, 57, 67) 0px 0px 20px 0px')
    })

    it('add values to chart by inputing data in inputs, then delete it', () => {
        timeline.visit()

        timeline.addDataToChart('1')
        timeline.addButtonClick()
        cy.contains('The chart was successfully built for 1 day!')

        timeline.allDisabledValues
            .first()
            .find('input')
            .each($el => {
                cy.wrap($el).should('have.css', 'pointer-events', 'none')
            })

        timeline.addDataToChart('1')
        timeline.addButtonClick()
        cy.contains('The chart was successfully built for 2 days!')

        timeline.allDisabledValues.first().find('[data-cy="inputs-group-close"]').find('span').click()

        cy.getByDataCy('inputs-group-wrapper').should('have.length', 1)
        cy.contains('The chart was successfully built for 1 day!')
    })
})
