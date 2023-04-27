  
it('API 1: Get All Products List', { env: { hideCredentials: true } }, () => {

    cy.api({
      method: 'get',
      url: 'https://automationexercise.com/api/productsList',
      form: true,
      body: {}
    }).then((response) => {
      expect(response.status).to.eq(200) 
      expect(response.body).to.contains('products')
    })
})
  