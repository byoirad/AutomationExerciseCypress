import Header from '../support/components/header';
import HomePage from '../support/pages/home' 
import ProductsPage from '../support/pages/products';
import ProductsDetailsPage from '../support/pages/products details';

describe('Test Case 8', () => {
   
    beforeEach(function () {
        cy.fixture('products')
            .then( function(product) {
                this.data = product
        })
      })
    
    it('Verify All Products and product detail page', function() {

        const product = this.data.product1

      HomePage.go('https://automationexercise.com/')
      HomePage.shouldBeVisible()
      Header.goToProducts()
      ProductsPage.shouldBeVisible()
      ProductsPage.viewProduct(product.id)
      ProductsDetailsPage.categoryShouldBeVisible(product)

    });
});