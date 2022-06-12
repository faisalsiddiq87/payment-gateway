describe('Navigation', () => {
  it('should navigate to the Transactions page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // The new url should include "/"
    cy.url().should('include', '/')

    // The new page should contain an h1 with "Landing"
    cy.get('h1').contains('Do your Transactions with')
  })
})