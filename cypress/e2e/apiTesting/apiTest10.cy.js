
it('API 10: POST To Verify Login with invalid details', { env: { hideCredentials: true } }, () => {

    cy.api({
      method: 'post',
      url: 'https://automationexercise.com/api/verifyLogin',
      form: true,
      body: {
        email: "invalidemail@mail.com",
        password: "invalidpassworduser",
      }
    }).then((response) => {
      expect(response.body).to.contains('"responseCode": 404') 
      expect(response.body).to.contains('User not found!')
    })
})
  