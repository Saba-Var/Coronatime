/// <reference types="cypress" />

describe('New password page', () => {
  beforeEach(() => {
    cy.visit('/Verify-password')
  })

  it('user can see all components with translation of new password page', () => {
    cy.beVisible('RESET PASSWORD')
    cy.beVisible('Password')
    cy.beVisible('Repeat Password')
    cy.get("[data-TestId='Language']").click()
    cy.get("[data-TestId='ge']").click()
    cy.beVisible('პაროლის შეცვლა')
    cy.beVisible('პაროლი')
    cy.beVisible('გაიმეორეთ პაროლი')
  })

  it('if input fields are invalid show error message', () => {
    cy.get("[data-TestId='Password']").type('sa', { force: true })
    cy.contains("Passwords don't match").should('not.exist')
    cy.get("[data-TestId='Language']").click()
    cy.get("[data-TestId='ge']").click()
    cy.get("[data-TestId='CorrectIcon']").should('not.exist')
    cy.get("[data-TestId='Repeat Password']").type('sa', { force: true })
    cy.beVisible('პაროლი უნდა შედგებოდეს მინ 3 სიმბოლოსგან')
  })

  it('if input fields are valid show feedback and submit', () => {
    cy.get("[data-TestId='Password']").type('saba', { force: true })
    cy.get("[data-TestId='Repeat Password']").type('saba', { force: true })
    cy.get("[data-TestId='CorrectIcon']").should('be.visible')
    cy.get("[data-TestId='ErrorIcon']").should('not.exist')
    cy.contains("Passwords don't match").should('not.exist')
    cy.intercept(
      'POST',
      'https://coronatime-api.devtest.ge/api/password/recover',
      {
        statusCode: 200,
      }
    )
    cy.get("[data-TestId='GreenBtn']").click()
    cy.beVisible('Your password has been updated successfully')
    cy.beVisible('SIGN IN')
    cy.get("[data-TestId='GreenBtn']").click()
    cy.url().should('not.include', '/Verify-password')
  })
})
