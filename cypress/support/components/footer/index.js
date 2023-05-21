import {el} from './elements'

const Footer = {

   subscriptionShouldBeVisible: ()=> {

        cy.get(el.subscriptionText)
            .should('be.visible')
            .should('have.text', 'Subscription')
    },

    typeEmail: (userSubscription)=> {

        cy.get(el.inputEmail).type(userSubscription.email)
    },

    submitSubscription: ()=> {

        cy.get(el.submitButton).click()
    },

    subscriptionsuccessfully: ()=> {

        cy.get(el.successfullyText)
            .should('be.visible')
            .should('have.text', 'You have been successfully subscribed!')

    },
}

export default Footer