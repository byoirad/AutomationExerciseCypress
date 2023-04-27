
it('API 14: GET user account detail by email', { env: { hideCredentials: true } }, () => {
    
    cy.api({
    method: 'post',
    url: 'https://automationexercise.com/api/createAccount',
    form: true,
    body: {
      name: "James Bond",
      email: "jamesbond007@gmail.com",
      password: "jamessenha007",
      title: "Mrs.",
      birth_date: "21",
      birth_month: "3",
      birth_year: "2002",
      firstname: "James",
      lastname: "Bond",
      company: "JBC",
      address1: "250 5th Ave, New York, NY 10118, USA.",
      address2: "175 5th Ave, New York, NY 10118, USA.",
      country: "United States",
      zipcode: "359041",
      state: "New York",
      city: "Oswego",
      mobile_number: "+12642312313"
    }
    })
  
    cy.api({
      method: 'get',
      url: 'https://automationexercise.com/api/getUserDetailByEmail?email=jamesbond007@gmail.com',
      form: true,
      body: {
        email: "jamesbond007@gmail.com",
      }
    }).then((response) => {
      expect(response.status).to.eq(200) 
      expect(response.body).to.contains('"name": "James Bond"')
    })

    cy.api({
      method: 'delete',
      url: 'https://automationexercise.com/api/deleteAccount',
      form: true,
      body: {
        email: "jamesbond007@gmail.com",
        password: "jamessenha007",
      
      }
    })
})