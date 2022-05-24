/// <reference types="cypress" />
export {}

Cypress.Commands.add('LogIn', () => {
  cy.get("[data-TestId='Username']").type('qqqq', { force: true })
  cy.get("[data-TestId='Password']").type('qqqq', { force: true })
  cy.get("[data-TestId='GreenBtn']").click()
  cy.url().should('include', '/Dashboard/Worldwide')
})
