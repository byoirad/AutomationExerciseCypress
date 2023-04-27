describe('API Testing', () => {
  
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

    it('API 7: POST To Verify Login without email parameter', { env: { hideCredentials: true } }, () => {

      cy.api({
        method: 'post',
        url: 'https://automationexercise.com/api/verifyLogin',
        form: true,
        body: {
          password: "homessimpsonsenha",
        }  
      }).then((response) => {
        expect(response.body).to.contains('"responseCode": 400') 
        expect(response.body).to.contains('Bad request, email or password parameter is missing in POST request.')
    })
    })

    it('API 8: DELETE To Verify Login', { env: { hideCredentials: true } }, () => {

      cy.api({
        method: 'delete',
        url: 'https://automationexercise.com/api/verifyLogin',
        form: true,
      }).then((response) => {
        expect(response.body).to.contains('"responseCode": 405') 
        expect(response.body).to.contains('This request method is not supported.')
    })
    })

    it('API 9: POST To Verify Login with invalid details', { env: { hideCredentials: true } }, () => {

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
    
    it('API 10: POST To Create/Register User Account', { env: { hideCredentials: true } }, () => {

      cy.api({
        method: 'post',
        url: 'https://automationexercise.com/api/createAccount',
        form: true,
        body: {
          name: "Homer Simpson",
          email: "homersimpson@gmail.com",
          password: "homessimpsonsenha",
          title: "Mr",
          birth_date: "2",
          birth_month: "4",
          birth_year: "2016",
          firstname: "Homer",
          lastname: "Simpson",
          company: "RFB",
          address1: "asdasdas",
          address2: "asdasdas",
          country: "India",
          zipcode: "12312321",
          state: "asdasdas",
          city: "asdasdas",
          mobile_number: "3123123123123"
        }
      }).then((response) => {
        expect(response.body).to.contains('"responseCode": 201') 
        expect(response.body).to.contains('User created!')
    })
    })

    it('API 11: POST To Verify Login with valid details', { env: { hideCredentials: true } }, () => {

      cy.api({
        method: 'post',
        url: 'https://automationexercise.com/api/createAccount',
        form: true,
        body: {
          name: "Homer Simpson",
          email: "homersimpson@gmail.com",
          password: "homessimpsonsenha",
          title: "Mr",
          birth_date: "2",
          birth_month: "4",
          birth_year: "2016",
          firstname: "Homer",
          lastname: "Simpson",
          company: "RFB",
          address1: "asdasdas",
          address2: "asdasdas",
          country: "India",
          zipcode: "12312321",
          state: "asdasdas",
          city: "asdasdas",
          mobile_number: "3123123123123"
        }
      })
      
      cy.api({
        method: 'post',
        url: 'https://automationexercise.com/api/verifyLogin',
        form: true,
        body: {
          email: "homersimpson@gmail.com",
          password: "homessimpsonsenha",
        }
      }).then((response) => {
        expect(response.status).to.eq(200) 
        expect(response.body).to.contains('User exists!')
    })
    
      cy.api({
        method: 'delete',
        url: 'https://automationexercise.com/api/deleteAccount',
        form: true,
        body: {
          email: "homersimpson@gmail.com",
          password: "homessimpsonsenha",
        
        }
      })  
    })

    it('API 12: PUT METHOD To Update User Account', { env: { hideCredentials: true } }, () => {
      
      cy.api({
        method: 'post',
        url: 'https://automationexercise.com/api/createAccount',
        form: true,
        body: {
          name: "Homer Simpson",
          email: "homersimpson@gmail.com",
          password: "homessimpsonsenha",
          title: "Mr",
          birth_date: "2",
          birth_month: "4",
          birth_year: "2016",
          firstname: "Homer",
          lastname: "Simpson",
          company: "RFB",
          address1: "asdasdas",
          address2: "asdasdas",
          country: "India",
          zipcode: "12312321",
          state: "asdasdas",
          city: "asdasdas",
          mobile_number: "3123123123123"
        }
      })
      
      cy.api({
        method: 'put',
        url: 'https://automationexercise.com/api/updateAccount',
        form: true,
        body: {
          name: "Homer Simpson",
          email: "homersimpson@gmail.com",
          password: "homessimpsonsenha",
          title: "Mr",
          birth_date: "2",
          birth_month: "4",
          birth_year: "2016",
          firstname: "Homer",
          lastname: "Simpson",
          company: "RFB",
          address1: "asdasdas",
          address2: "asdasdas",
          country: "India",
          zipcode: "12312321",
          state: "asdasdas",
          city: "asdasdas",
          mobile_number: "3123123123123"
        }
      }).then((response) => {
        expect(response.status).to.eq(200) 
        expect(response.body).to.contains('User updated!')
    })
    })

    it('API 13: DELETE METHOD To Delete User Account', { env: { hideCredentials: true } }, () => {
      
      cy.api({
        method: 'delete',
        url: 'https://automationexercise.com/api/deleteAccount',
        form: true,
        body: {
          email: "homersimpson@gmail.com",
          password: "homessimpsonsenha",
        }
      }).then((response) => {
        expect(response.status).to.eq(200) 
        expect(response.body).to.contains('Account deleted!')
    })
    })

    it('API 14: GET user account detail by email', { env: { hideCredentials: true } }, () => {
    
      cy.api({
      method: 'post',
      url: 'https://automationexercise.com/api/createAccount',
      form: true,
      body: {
        name: "Homer Simpson",
        email: "homersimpson@gmail.com",
        password: "homessimpsonsenha",
        title: "Mr",
        birth_date: "2",
        birth_month: "4",
        birth_year: "2016",
        firstname: "Homer",
        lastname: "Simpson",
        company: "RFB",
        address1: "asdasdas",
        address2: "asdasdas",
        country: "India",
        zipcode: "12312321",
        state: "asdasdas",
        city: "asdasdas",
        mobile_number: "3123123123123"
      }
    })
    
    cy.api({
      method: 'get',
      url: 'https://automationexercise.com/api/getUserDetailByEmail?email=homersimpson%40gmail.com',
      form: true,
    }).then((response) => {
      expect(response.status).to.eq(200) 
      expect(response.body).to.contains('"name": "Homer Simpson"')
  })

    cy.api({
      method: 'delete',
      url: 'https://automationexercise.com/api/deleteAccount',
      form: true,
      body: {
        email: "homersimpson@gmail.com",
        password: "homessimpsonsenha",
      
      }
    })
  })
})
