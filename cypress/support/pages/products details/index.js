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
    
    
    categoryShouldBeVisible: (data)=> {

        cy.get(el.category).find('p')
            .contains('Category:').as('Category')
        cy.get('@Category').should('to.contain', data.category)
            
        cy.get(el.category).find('span')
            .children('span').as('Price')
        cy.get('@Price').should('to.contain', data.price)

        cy.get(el.category).find('p')
            .contains('Availability:').parent().as('Availability')
        cy.get('@Availability').should('to.contain', data.availability)

        cy.get(el.category).find('p')
            .contains('Condition:').parent().as('Condition')
        cy.get('@Condition').should('to.contain', data.condition)

        cy.get(el.category).find('p')
            .contains('Brand:').parent().as('Brand')
        cy.get('@Brand').should('to.contain', data.brand)
    },

}

export default ProductsDetailsPage