/// <reference types="cypress" />

describe('Confirmed email page', () => {
  it('user can see all components with translation of dashboard page: worldwide section, and also verify email address', () => {
    cy.visit('/Confirmed-email')
    cy.intercept(
      'POST',
      'https://coronatime-api.devtest.ge/api/confirm-account',
      {
        statusCode: 200,
      }
    )
    cy.beVisible('Your account is confirmed, you can sign in')
    cy.get("[data-TestId='completedIcon']").should('be.visible')
    cy.get("[data-TestId='Language']").select('Georgian')
    cy.beVisible('თქვენი ანგარიში დადასტურებულია, შეგიძლიათ შეხვიდეთ')
    cy.get("[data-TestId='GreenBtn']").click()
    cy.url().should('not.include', '/Confirmed-email')
  })

  it("if user types url without redirecting from the gmail then he/she won't be able to verify email", () => {
    cy.visit('/Confirmed-email')
    cy.intercept(
      'POST',
      'https://coronatime-api.devtest.ge/api/confirm-account',
      {
        statusCode: 401,
      }
    )
    cy.get("[data-TestId='GreenBtn']").click()
    cy.url().should('include', '/Confirmed-email')
  })
})
