import {el} from './elements'

const ProductsDetailsPage = {

    productBlueTop: ()=> {

        cy.get(el.product01Name)
        .should('be.visible')
        .should('have.text', 'Blue Top')

        cy.get(el.product01Name)
        .should('be.visible')
        .should('have.text', 'Blue Top')

    },
}

export default ProductsDetailsPage