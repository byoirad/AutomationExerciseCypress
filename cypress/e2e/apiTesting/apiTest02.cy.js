
it('API 2: POST To All Products List', { env: { hideCredentials: true } }, () => {

    cy.api({
      method: 'post',
      url: 'https://automationexercise.com/api/productsList',
      form: true,
      body: {}
    }).then((response) => {
      expect(response.body).to.contains('"responseCode": 405') 
      expect(response.body).to.contains('This request method is not supported.')
    })
})
