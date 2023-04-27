
it('API 09: DELETE To Verify Login', { env: { hideCredentials: true } }, () => {

    cy.api({
      method: 'delete',
      url: 'https://automationexercise.com/api/verifyLogin',
      form: true,
    }).then((response) => {
      expect(response.body).to.contains('"responseCode": 405') 
      expect(response.body).to.contains('This request method is not supported.')
    })
})
