import {el} from './elements'

const SignupPage = {

    shouldBeVisible: ()=> {

        cy.get(el.loginForm)
        .children(el.titleText).should('be.visible') 

    },

    form: (user)=> {

        cy.get(el.gender).children().filter(`:contains("${user.gender}")`).click()
        cy.get(el.password).type(user.password)
        cy.get(el.day).select(user.birthday.day)
        cy.get(el.month).select(user.birthday.month)
        cy.get(el.years).select(user.birthday.year)
        if (user.newsletter=="yes") cy.get(el.newsletter).click ()
        if (user.specialOffers=="yes") cy.get(el.specialOffers).click()
        cy.get(el.firstName).type(user.name)
        cy.get(el.lastName).type(user.lastName)
        cy.get(el.company).type(user.company)
        cy.get(el.ad1).type(user.address1)
        cy.get(el.ad2).type(user.address2)
        cy.get(el.country).select(user.country)
        cy.get(el.state).type(user.state)
        cy.get(el.city).type(user.city)
        cy.get(el.zipcode).type(user.zipCode)
        cy.get(el.number).type(user.mobileNumber)

    },

    buttonSignupClick: ()=> {

        cy.get(el.buttonSignup).click()

    },

    buttonContinueClick: ()=> {

        cy.get(el.buttonContinue).click()

    }

}

export default SignupPage