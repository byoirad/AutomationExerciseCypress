import HomePage from '../support/pages/home' 
import ContactPage from '../support/pages/contact us';
import Header from '../support/components/header';

describe('Test Case 6', () => {
   
    beforeEach(function () {
        cy.fixture('register_user')
            .then( function(userContact) {
                this.data = userContact
        })
      })
    
    it('Contact Us Form', function() {

      const userContact = this.data.userContact

      HomePage.go('https://automationexercise.com/')
      HomePage.shouldBeVisible()
      Header.goToContactUs()
      ContactPage.getInTouchVisible() 
      ContactPage.form(userContact)
      ContactPage.submit()
      ContactPage.successShouldBeVisible()
      ContactPage.homeBack()
      HomePage.shouldBeVisible()

  });
});