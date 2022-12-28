Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
) => {
    const login = () => {
        cy.visit('/users/sign_in')

        cy.get('#user_login').type(user,)
        cy.get('#user_password').type(password, { log: false })
        cy.get('#new_user > .submit-container > .btn').click()
    }

    login()

})

Cypress.Commands.add('logout', () => {
    
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()
    
})