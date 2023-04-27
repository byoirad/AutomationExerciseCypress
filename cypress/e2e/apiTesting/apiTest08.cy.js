
it('API 08: POST To Verify Login without email parameter', { env: { hideCredentials: true } }, () => {

    cy.api({
      method: 'post',
      url: 'https://automationexercise.com/api/verifyLogin',
      form: true,
      body: {
        password: "jamessenha007",
      }  
    }).then((response) => {
      expect(response.body).to.contains('"responseCode": 400') 
      expect(response.body).to.contains('Bad request, email or password parameter is missing in POST request.')
    })
})
