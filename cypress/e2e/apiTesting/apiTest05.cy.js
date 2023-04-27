
it('API 5: POST To Search Product', { env: { hideCredentials: true } }, () => {

    cy.api({
      method: 'post',
      url: 'https://automationexercise.com/api/searchProduct',
      form: true,
      body: {
        search_product: "tshirt",
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.contains('{"id": 29, "name": "Green Side Placket Detail T-Shirt", "price": "Rs. 1000", "brand": "Polo", "category": {"usertype": {"usertype": "Men"}, "category": "Tshirts"}}')
    })
})
