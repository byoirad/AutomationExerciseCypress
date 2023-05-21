import Footer from '../support/components/footer';
import HomePage from '../support/pages/home' 

describe('Test Case 10', () => {

      beforeEach(function () {
        cy.fixture('register_user')
            .then( function(userSubscription) {
                this.data = userSubscription
        })
      })

      it('Verify Subscription in home page', function() {

        const userSubscription = this.data.userSubscription

        HomePage.go('https://automationexercise.com/')
        HomePage.shouldBeVisible()
        HomePage.ScrollToFooter()
        Footer.subscriptionShouldBeVisible()
        Footer.typeEmail(userSubscription)
        Footer.submitSubscription()
        Footer.subscriptionsuccessfully()
    });
});