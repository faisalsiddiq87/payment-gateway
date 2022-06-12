describe('Navigation', () => {
  it('should navigate to the Transactions page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "Transactions" and click it
    cy.get('a[href*="/transactions"]').click()

    // The new url should include "/transactions"
    cy.url().should('include', '/transactions')

    // The new page should contain an th with "Transactions page"
    cy.get('th').contains('Transaction ID')
  })
})