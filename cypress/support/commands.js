// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add('apiRegister', (user) => { 
    
    cy.api({
        method: 'post',
        url: 'https://automationexercise.com/api/createAccount',
        form: true,
        body: {
          name: user.name,
          email: user.email,
          password: user.password,
          title: user.gender,
          birth_date: user.birthday.day,
          birth_month: user.birthday.month,
          birth_year: user.birthday.year,
          firstname: user.firstName,
          lastname: user.lastName,
          company: user.company,
          address1: user.address1,
          address2: user.address2,
          country: user.country,
          zipcode: user.zipCode,
          state: user.state,
          city: user.city,
          mobile_number: user.mobileNumber
        }
      }).then((response) => {
        expect(response.body).to.contains('"responseCode": 201') 
        expect(response.body).to.contains('User created!')
    })
 })

 Cypress.Commands.add('apiDelete', (user) => {
    
    cy.api({
        method: 'delete',
        url: 'https://automationexercise.com/api/deleteAccount',
        form: true,
        body: {
          email: user.email,
          password: user.password,
        }
      }).then((response) => {
        expect(response.status).to.eq(200) 
        expect(response.body).to.contains('Account deleted!')
    })
 })

 