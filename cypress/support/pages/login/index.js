import {el} from './elements'

const LoginPage = {

    formSignup: (user)=> {

        cy.get(el.inputName).type(user.name)
        cy.get(el.inputEmail).type(user.email)
    },

    submitSignup: ()=> {

        cy.get(el.signupButton).click()
    }, 

    formLogin: (user)=> {

        cy.get(el.inputEmailAdress).type(user.email)
        cy.get(el.inputPassword).type(user.password)
    },

    submitLogin: ()=> {

        cy.get(el.loginButton).click()
    }, 

    errorMessage: ()=> {

        cy.get(el.loginErrorMessage)
            .should('be.visible')
            .should('have.text', 'Your email or password is incorrect!')
    }, 

    shouldBeVisible: ()=> {
         cy.get(el.loginPage).should('be.visible')
    },

    





}

export default LoginPage