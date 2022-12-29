
describe('Login', () => {

  it('sucessfully', () => {
    
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false }

    cy.login(user, password, options)
  
  })
})