import {el} from './elements'

const testCasesPage = {

    shouldBeVisible: ()=> {

        cy.get(el.shouldBeVisible)
            .should('be.visible')
            .should('have.text', 'Test Cases')

    },
}

export default testCasesPage