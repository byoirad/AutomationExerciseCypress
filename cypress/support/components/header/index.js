import {el} from './elements'

const Header = {

   goToLogin: ()=> {

    cy.get(el.loginButton).click()
    cy.get(el.loginPage).should('be.visible')

   },

    

}

export default Header