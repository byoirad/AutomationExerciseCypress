import HomePage from '../support/pages/home' 
import Header from '../support/components/header';
import LoginPage from '../support/pages/login';
import SignupFeedback from '../support/pages/signupFeedback';

describe('Test Case 4', () => {
   
    beforeEach(function () {
        cy.fixture('register_user')
            .then( function(user) {
                this.data = user
        })
      })
    
    it('Logout User', function() {

      const user = this.data.user

      cy.apiRegister(user)
      HomePage.go('https://automationexercise.com/')
      HomePage.shouldBeVisible()
      Header.goToLogin()
      LoginPage.shouldBeVisible()
      LoginPage.formLogin(user)
      LoginPage.submitLogin()
      Header.userShouldBeVisible(user)
      Header.logout()
      LoginPage.shouldBeVisible()
      cy.apiDelete(user)
      
    });
});