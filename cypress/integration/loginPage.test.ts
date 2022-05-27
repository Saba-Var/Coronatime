/// <reference types="cypress" />

describe('LogIn page tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('user can see all components of LogIn page', () => {
    cy.beVisible('Welcome back! Please enter your details')
    cy.beVisible('Remember this device')
    cy.beVisible('Forgot password?')
    cy.beVisible('Sign up for free')
    cy.get("[data-TestId='Logo']").should('be.visible')
    cy.beVisible('Welcome back')
    cy.beVisible('Username')
    cy.beVisible('Password')
    cy.beVisible('English')
    cy.beVisible('LOG IN')
  })

  it('show correct icon when user inputs valid data', () => {
    cy.get("[data-TestId='Username']").type('Saba')
    cy.get("[data-TestId='CorrectIcon']").should('be.visible')
    cy.get("[data-TestId='ErrorIcon']").should('not.exist')
    cy.get("[data-TestId='Password']").type('Saba', { force: true })
    cy.get("[data-TestId='ErrorIcon']").should('not.exist')
  })

  it('show error when inputs contain invalid data', () => {
    cy.get("[data-TestId='Username']").type('Sa')
    cy.get("[data-TestId='CorrectIcon']").should('not.exist')
    cy.get("[data-TestId='ErrorIcon']").should('be.visible')
    cy.get("[data-TestId='GreenBtn']").click()
    cy.beVisible('This field is required')
    cy.get("[data-TestId='CorrectIcon']").should('not.exist')
  })

  it('show georgian content if user selects georgian language', () => {
    cy.get("[data-TestId='Language']").select('Georgian', { force: true })
    cy.beVisible('კეთილი იყოს თქვენი მობრძანება')
    cy.beVisible('არ გაქვთ აგარიში? დარეგისტრირდი უფასოდ')
    cy.beVisible('დაიმახსოვრეთ მოწყობილობა')
    cy.beVisible('დაგავიწყდათ პაროლი?')
    cy.beVisible('ქართული')
    cy.beVisible('პაროლი')
    cy.beVisible('სახელი')
    cy.beVisible('შესვლა')
    cy.beVisible('კეთილი იყოს თქვენი მობრძანება! გთხოვთ შეიყვანეთ მონაცემები')
  })

  it('when georgian language is selected show georgian error messages', () => {
    cy.get("[data-TestId='Language']").select('Georgian')
    cy.get("[data-TestId='GreenBtn']").click()
    cy.get("[data-TestId='ErrorIcon']").should('be.visible')
    cy.get("[data-TestId='CorrectIcon']").should('not.exist')
    cy.beVisible('ამ ველის შევსება სავალდებულოა')
    cy.beVisible(
      'მომხმარებლის სახელი უნდა იყოს უნიკალური, უნდა შედგებოდეს მინ 3 სიმბოლოსგან'
    )
  })

  it('if user log in with unregistered username and password then show error', () => {
    cy.get("[data-TestId='Username']").type('The Saba')
    cy.get("[data-TestId='CorrectIcon']").should('be.visible')
    cy.get("[data-TestId='ErrorIcon']").should('not.exist')
    cy.get("[data-TestId='Password']").type('Saba', { force: true })
    cy.get("[data-TestId='GreenBtn']").click()
    cy.beVisible('Name not found')
    cy.beVisible('Password did not match')
    cy.get("[data-TestId='ErrorIcon']").should('be.visible')
    expect(localStorage.getItem('token'))
  })

  it('if User inputs correct data can go to the dashboard page', () => {
    cy.LogIn()
  })

  it('is user was logged in after he/she visits page automatically redirect to the dashboard page', () => {
    cy.LogIn()
    cy.reload()
    cy.url().should('include', '/Dashboard/Worldwide')
    cy.visit('/')
    cy.url().should('include', '/Dashboard/Worldwide')
  })
})
