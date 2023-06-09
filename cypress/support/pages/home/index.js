import {el} from './elements'

const HomePage = {

    go: (url)=> {

        cy.visit(url)

    },

    shouldBeVisible: ()=> {

        cy.get(el.containerFilter)
        .parents('.container').should('be.visible') 

    },

    deleteAccount: ()=> {

        cy.get(el.accountDelete).click()

    },

    deleteAccountButtonClick: ()=> {

       cy.get(el.deleteAccountContinueButton).click()

    },

    ScrollToFooter: ()=> {

        cy.scrollTo(0, 8000)
 
     },
}

export default HomePage