import Header from '../support/components/header';
import HomePage from '../support/pages/home'
import LoginPage from '../support/pages/login';
import SignupPage from '../support/pages/signup';
import SignupFeedback from '../support/pages/signupFeedback';

describe.only('Register', () => {
    
    it.only('Test Case 1: Register User', () => {
        const user = {
            name: 'James Bond',
            email: 'jamesbond007@gmail.com',
            gender: 'Mrs.',
            password: 'jamessenha007',
            birthday: {
                day: '21',
                month: 'March',
                year: '2002',
            },
            newsletter: 'no',
            specialOffers: 'yes',
            name: 'James',
            lastName: 'Bond',
            company: 'JBC',
            address1: '250 5th Ave, New York, NY 10118, USA.',
            address2: '175 5th Ave, New York, NY 10118, USA.',
            country: 'United States',
            state: 'New York',
            city: 'Oswego',
            zipCode: '35904',
            mobileNumber: '+1264231231',

        }
        
        HomePage.go('https://automationexercise.com/')
        HomePage.shouldBeVisible()
        Header.goToLogin()
        LoginPage.formSignup(user)
        LoginPage.submitSignup()
        SignupPage.shouldBeVisible()
        SignupPage.form(user)
        SignupPage.buttonSignupClick()
        SignupFeedback.accountShouldBeVisible()
        SignupPage.buttonContinueClick()
        HomePage.userShouldBeVisible()
        HomePage.deleteAccount()
        SignupFeedback.deleteAccountShouldBeVisible()
        HomePage.deleteAccountButtonClick()
        
});



































});