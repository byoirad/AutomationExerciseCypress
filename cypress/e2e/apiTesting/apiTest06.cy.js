
it('API 6: POST To Search Product without search_product parameter', { env: { hideCredentials: true } }, () => {

    cy.api({
      method: 'post',
      url: 'https://automationexercise.com/api/searchProduct',
      form: true, 
    }).then((response) => {
      expect(response.body).to.contains('"responseCode": 400') 
      expect(response.body).to.contains('Bad request, search_product parameter is missing in POST request.')
    })
})
