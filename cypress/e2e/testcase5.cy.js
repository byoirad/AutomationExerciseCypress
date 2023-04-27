import HomePage from '../support/pages/home' 
import Header from '../support/components/header';
import LoginPage from '../support/pages/login';
import SignupFeedback from '../support/pages/signupFeedback';
import SignupPage from '../support/pages/signup';

describe('Test Case 5', () => {
   
    beforeEach(function () {
        cy.fixture('register_user')
            .then( function(user) {
                this.data = user
        })
      })
    
    it('Register User with existing email', function() {

      const user = this.data.user

      cy.apiRegister(user)
      HomePage.go('https://automationexercise.com/')
      HomePage.shouldBeVisible()
      Header.goToLogin()
      LoginPage.shouldBeVisible()
      LoginPage.formSignup(user)
      LoginPage.submitSignup()
      SignupPage.registerErrorMessage()
      
  });
});