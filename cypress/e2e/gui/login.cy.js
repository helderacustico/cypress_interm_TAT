describe('empty spec', () => {
  it('passes', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})