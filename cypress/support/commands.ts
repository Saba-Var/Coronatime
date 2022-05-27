/// <reference types="cypress" />

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

Cypress.Commands.add('beVisible', (v) => {
  cy.contains(v).should('be.visible', { force: true })
})

Cypress.Commands.add('signUpErrors', () => {
  cy.get("[data-TestId='Username']").type('sa')
  cy.get("[data-TestId='ErrorIcon']").should('be.visible')
  cy.get("[data-TestId='Email']").type('sabavar@redberry.!!')
  cy.beVisible('Enter valid email address!')
  cy.get("[data-TestId='Password']").type('sa')
  cy.beVisible('Password should be unique, min 3 symbols')
  cy.get("[data-TestId='Repeat Password']").type('password', { force: true })
  cy.beVisible("Passwords don't match")
  cy.get("[data-TestId='CorrectIcon']").should('not.exist')
  cy.get("[data-TestId='GreenBtn']").click()
  cy.url().should('include', '/Sign-up')
})

Cypress.Commands.add('correctSignUp', () => {
  cy.get("[data-TestId='Username']").type('saba', { force: true })
  cy.get("[data-TestId='Email']").type('sabavar@redberry.ge', { force: true })
  cy.get("[data-TestId='Password']").type('password', { force: true })
  cy.get("[data-TestId='Repeat Password']").type('password', { force: true })
})
