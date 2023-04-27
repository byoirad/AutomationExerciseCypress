import {el} from './elements'

const ContactPage = {

    getInTouchVisible: ()=> {

       cy.get(el.textGetInTouch)
        .should('be.visible')
        .should('have.text', 'Get In Touch')
    },

    form: (userContact)=> {

        cy.get(el.name).type(userContact.name)
        cy.get(el.email).type(userContact.email)
        cy.get(el.subject).type(userContact.subject)
        cy.get(el.message).type(userContact.message)
        cy.get(el.uploadFileButton).selectFile('cypress/fixtures/image.png')
    
     },

    submit: ()=> {

        cy.get(el.submitButton).click()

     },

    successShouldBeVisible: ()=> {

        cy.get(el.successMessage)
            .should("be.visible")
            .should('have.text', 'Success! Your details have been submitted successfully.')

     },

     homeBack: ()=> {

        cy.get(el.homeButton).click()

     },
}

export default ContactPage