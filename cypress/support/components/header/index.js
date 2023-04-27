import {el} from './elements'

const Header = {

   goToLogin: ()=> {

    cy.get(el.loginButton).click()
},

   
   userShouldBeVisible: (user)=> {

      cy.get(el.greeting).parent()
      .should('have.text', ` Logged in as ${user.name}`)

}, 

   logout: ()=> {

   cy.get(el.logoutButton).click()
}, 

   goToContactUs: ()=> {

   cy.get(el.contactButton).click()

},

   goToTestCases: ()=> {
      
   cy.get(el.testCaseButton).click()

},

   goToProducts: ()=> {

   cy.get(el.productsButton).click()
   
}





}

export default Header