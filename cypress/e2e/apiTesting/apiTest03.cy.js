
it('API 3: Get All Brands List', { env: { hideCredentials: true } }, () => {

    cy.api({
      method: 'get',
      url: 'https://automationexercise.com/api/brandsList',
      form: true,
      body: {}
    }).then((response) => {
      expect(response.status).to.eq(200) 
      expect(response.body).to.contains('brands')
    })
})
