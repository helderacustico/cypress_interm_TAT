describe('Lougout', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })

    it('Sucessfully', () => {
        cy.logout()
        
    })
})