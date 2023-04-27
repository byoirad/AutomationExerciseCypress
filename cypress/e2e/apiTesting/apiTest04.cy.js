
it('API 4: PUT To All Brands List', { env: { hideCredentials: true } }, () => {

    cy.api({
      method: 'put',
      url: 'https://automationexercise.com/api/brandsList',
      form: true,
    }).then((response) => {
      expect(response.body).to.contains('"responseCode": 405') 
      expect(response.body).to.contains('This request method is not supported.')
    })
})
