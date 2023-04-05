import {el} from './elements'

const HomePage = {

    go: (url)=> {

        cy.visit(url)

    },

    shouldBeVisible: ()=> {

        cy.get(el.containerFilter)
        .parents('.container').should('be.visible') 

    },

    userShouldBeVisible: ()=> {

        cy.get(el.userShouldBeVisible).parent()
        .should('have.text', ' Logged in as James')

    },

    deleteAccount: ()=> {

        cy.get(el.accountDelete).click()

    },

    deleteAccountButtonClick: ()=> {

       cy.get(el.deleteAccountContinueButton).click()

    },
}

export default HomePage