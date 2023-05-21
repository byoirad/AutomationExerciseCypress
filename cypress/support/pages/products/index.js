import {el} from './elements'

const ProductsPage = {

    shouldBeVisible: ()=> {

       cy.get(el.allProductsText)
        .should('be.visible')
        .should('have.text', 'All Products')
    },

    viewProduct: (number)=> {

        cy.get(el.productDetail+number).click()
    },

    
    searchProduct: ()=> {

        cy.get(el.searchProductInput).type('Fancy Green Top')
        cy.get(el.submitSearch).click()
    },

    searchProductShouldBeVisible: ()=> {

        cy.get(el.searchedProductsText)
            .should('be.visible')
            .should('have.text', 'Searched Products')
    },
    
    relatedProductShouldBeVisible: ()=> {
        
        cy.get(el.relatedProduct)
            .should('be.visible')
            .should('have.text', 'Fancy Green Top')
 
    },
}

export default ProductsPage