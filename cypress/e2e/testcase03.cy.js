import HomePage from '../support/pages/home' 
import Header from '../support/components/header';
import LoginPage from '../support/pages/login';

describe('Test Case 3', () => {
   
    beforeEach(function () {
        cy.fixture('register_user')
            .then( function(invalidUser) {
                this.data = invalidUser
        })
      })
    
    it('Login User with incorrect email and password', function() {

      const user = this.data.invalidUser

      HomePage.go('https://automationexercise.com/')
      HomePage.shouldBeVisible()
      Header.goToLogin()
      LoginPage.shouldBeVisible
      LoginPage.formLogin(user)
      LoginPage.submitLogin()
      LoginPage.errorMessage()
      
    });
});