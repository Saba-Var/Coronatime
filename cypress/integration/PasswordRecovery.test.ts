/// <reference types="cypress" />

describe('Password Recovery', () => {
  beforeEach(() => {
    cy.visit('/Recovery-Password-email')
  })

  it('show elements of password recovery page: stage 1 (email). User can send request if email is valid', () => {
    cy.intercept(
      'POST',
      'https://coronatime-api.devtest.ge/api/password/send-recovery-link',
      {
        statusCode: 200,
      }
    )
    cy.beVisible('RESET PASSWORD')
    cy.beVisible('Email')
    cy.get("[data-TestId='Language']").click({ force: true })
    cy.get("[data-TestId='ge']").click({ force: true })
    cy.beVisible('პაროლის შეცვლა')
    cy.beVisible('ელ-ფოსტა')
    cy.get("[data-TestId='Language']").click({ force: true })
    cy.get("[data-TestId='en']").click({ force: true })
    cy.get("[data-TestId='Email']").type('example@gmail.com', { force: true })
    cy.get("[data-TestId='GreenBtn']").click()
    cy.url().should('not.include', '/Recovery-Password-email')
    cy.beVisible('We have sent you a confirmation email')
    cy.get("[data-TestId='completedIcon']").should('be.visible')
  })

  it('if email does not exist or is taken show error message', () => {
    cy.intercept(
      'POST',
      'https://coronatime-api.devtest.ge/api/password/send-recovery-link',
      {
        statusCode: 422,
      }
    )
    cy.get("[data-TestId='Email']").type('sabavar@redberry.ge', { force: true })
    cy.get("[data-TestId='GreenBtn']").click()
    cy.url().should('include', '/Recovery-Password-email')
    cy.beVisible('Email address not found')
    cy.get("[data-TestId='ErrorIcon']").should('be.visible')
    cy.get("[data-TestId='Language']").click({ force: true })
    cy.get("[data-TestId='ge']").click()
    cy.beVisible('ელ-ფოსტა ვერ მოიძებნა')
  })
})
