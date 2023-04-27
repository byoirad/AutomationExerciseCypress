import Header from '../support/components/header';
import HomePage from '../support/pages/home' 
import testCasesPage from '../support/pages/test cases';

describe('Test Case 7', () => {
   
    beforeEach(function () {
        cy.fixture('register_user')
            .then( function(user) {
                this.data = user
        })
      })
    
    it('Verify Test Cases Page', function() {

      const user = this.data.user

      HomePage.go('https://automationexercise.com/')
      HomePage.shouldBeVisible()
      Header.goToTestCases()
      testCasesPage.shouldBeVisible()
    });
});