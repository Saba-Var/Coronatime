/// <reference types="cypress" />
export {}

Cypress.Commands.add('LogIn', () => {
  cy.get("[data-TestId='Username']").type('qqqq', { force: true })
  cy.get("[data-TestId='Password']").type('qqqq', { force: true })
  cy.get("[data-TestId='GreenBtn']").click()
  cy.url().should('include', '/Dashboard/Worldwide')
})

Cypress.Commands.add('notDashboard', () => {
  cy.url().should('not.include', '/Dashboard/Worldwide')
  cy.reload()
  cy.url().should('not.include', '/Dashboard/Worldwide')
})

Cypress.Commands.add('openMenu', () => {
  cy.viewport(550, 750)
  cy.get("[data-TestId='MenuIcon']").click()
})
