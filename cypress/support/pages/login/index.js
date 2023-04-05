import {el} from './elements'

const LoginPage = {

    formSignup: (user)=> {

        cy.get(el.inputName).type(user.name)
        cy.get(el.inputEmail).type(user.email)
    },

    submitSignup: ()=> {

        cy.get(el.signupButton).click()
    }, 


}

export default LoginPage