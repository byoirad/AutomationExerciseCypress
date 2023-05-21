import Header from '../support/components/header';
import HomePage from '../support/pages/home' 
import testCasesPage from '../support/pages/test cases';

describe('Test Case 7', () => {
   
    it('Verify Test Cases Page', function() {

      HomePage.go('https://automationexercise.com/')
      HomePage.shouldBeVisible()
      Header.goToTestCases()
      testCasesPage.shouldBeVisible()
    });
});