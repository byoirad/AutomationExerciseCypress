import Footer from '../support/components/footer';
import Cart from '../support/pages/cart';
import HomePage from '../support/pages/home' 

describe('Test Case 11', () => {

      beforeEach(function () {
        cy.fixture('register_user')
            .then( function(userSubscription) {
                this.data = userSubscription
        })
      })

      it('Verify Subscription in Cart page', function() {

        const userSubscription = this.data.userSubscription

        HomePage.go('https://automationexercise.com/')
        HomePage.shouldBeVisible()
        Cart.goToCart()
        Footer.subscriptionShouldBeVisible()
        Footer.typeEmail(userSubscription)
        Footer.submitSubscription()
        Footer.subscriptionsuccessfully()
    });
});