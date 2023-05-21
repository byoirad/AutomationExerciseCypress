import {el} from './elements'

const Cart = {

    goToCart: ()=> {

       cy.get(el.cartButton).click()
    },
}

export default Cart