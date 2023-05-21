import Header from '../support/components/header';
import HomePage from '../support/pages/home' 
import ProductsPage from '../support/pages/products';

describe('Test Case 9', () => {

    it('Search Product', function() {

      HomePage.go('https://automationexercise.com/')
      HomePage.shouldBeVisible()
      Header.goToProducts()
      ProductsPage.shouldBeVisible()
      ProductsPage.searchProduct()
      ProductsPage.searchProductShouldBeVisible()
      ProductsPage.relatedProductShouldBeVisible()
    });
});