import {el} from './elements'

const ProductsPage = {

    shouldBeVisible: ()=> {

       cy.get(el.allProductsText)
        .should('be.visible')
        .should('have.text', 'All Products')
    },

    viewProduct01: ()=> {

        cy.get(el.productDetail01).click()
    },


}

export default ProductsPage