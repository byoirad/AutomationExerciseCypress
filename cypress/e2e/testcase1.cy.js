import Header from '../support/components/header';
import HomePage from '../support/pages/home'
import LoginPage from '../support/pages/login';
import SignupPage from '../support/pages/signup';
import SignupFeedback from '../support/pages/signupFeedback';

describe('Test Case 1', () => {
   
    beforeEach(function () {
        cy.fixture('register_user')
            .then( function(user) {
                this.data = user
        })
      })

    it('Register User', function() {

      const user = this.data.user

      HomePage.go('https://automationexercise.com/')
      HomePage.shouldBeVisible()
      Header.goToLogin()
      LoginPage.shouldBeVisible()
      LoginPage.formSignup(user)
      LoginPage.submitSignup()
      SignupPage.shouldBeVisible()
      SignupPage.form(user)
      SignupPage.buttonSignupClick()
      SignupFeedback.accountShouldBeVisible()
      SignupPage.buttonContinueClick()
      Header.userShouldBeVisible(user)
      HomePage.deleteAccount()
      SignupFeedback.deleteAccountShouldBeVisible()
      HomePage.deleteAccountButtonClick()
       
  });
});