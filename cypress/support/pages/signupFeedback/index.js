import { el } from './elements'

const SignupFeedback = {
    
    accountShouldBeVisible: ()=> {

        cy.get(el.account).should('be.visible')
    },

    deleteAccountShouldBeVisible: ()=> {

        cy.get(el.accountDeleteShouldBeVisible).should('be.visible')

    },

}





export default SignupFeedback