describe('REGISTER', () => {
    
    it('Test Case 1: Register User', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('img[src="/static/images/home/logo.png"]').should('be.visible')
        cy.get('a[href="/login"]').click()
        cy.get('div[class=signup-form]').should('be.visible')
        cy.get('input[type=text]').type('James Bond')
        cy.get('input[data-qa="signup-email"]').type('jammesbond007@gmail.com')
        cy.get('button[data-qa="signup-button"]').click()
        cy.get('.login-form')
        .children('h2[class="title text-center"]').should('be.visible')
        cy.get('#id_gender1').click()
        cy.get('#password').type('jamessenha007')
        cy.get('#days').select('21')
        cy.get('#months').select('March')
        cy.get('#years').select('2002')
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        cy.get('#first_name').type('James')
        cy.get('#last_name').type('Bond')
        cy.get('#company').type('JamesBondex')
        cy.get('#address1').type('250 5th Ave, New York, NY 10118, USA.')
        cy.get('#address2').type('173 5th Ave, New York, NY 10118, USA.')
        cy.get('#country').select('United States')
        cy.get('#state').type('Nova York')
        cy.get('#city').type('Oswego')
        cy.get('#zipcode').type('35904')
        cy.get('#mobile_number').type('+1264231231')
        cy.get('button[data-qa="create-account"]').click()
        cy.get('h2[data-qa="account-created"] b').should('be.visible')
        cy.get('a[data-qa="continue-button"]').click()
        //Verify that 'Logged in as username' is visible 
        cy.get('a[href="/delete_account"]').click()
        cy.get('h2[class="title text-center"] b').should('be.visible')
});

    it('Test Case 2: Login User with correct email and password', () => {
       cy.visit('https://automationexercise.com/') 
       cy.get('img[src="/static/images/home/logo.png"]').should('be.visible')
       cy.get('a[href="/login"]').click()
       cy.get('div[class="login-form"] h2').should('be.visible')    
       cy.get('input[data-qa="login-email"]').type('peterparker@gmail.com')
       cy.get('input[type="password"]').type('peterparker')
       cy.get('button[data-qa="login-button"]').click()
       //Verify that 'Logged in as username' is visible
       //Click 'Delete Account' button
       //Verify that 'ACCOUNT DELETED!' is visible
});



































});