/// <reference types="cypress" />
export {}

describe('welcome page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('user can see all components of Login page', () => {
    cy.contains('Welcome back! Please enter your details').should('be.visible')
    cy.contains('Remember this device').should('be.visible')
    cy.contains('Forgot password?').should('be.visible')
    cy.contains('Sign up for free').should('be.visible')
    cy.get("[data-TestId='Logo']").should('be.visible')
    cy.contains('Welcome back').should('be.visible')
    cy.contains('Username').should('be.visible')
    cy.contains('Password').should('be.visible')
    cy.contains('English').should('be.visible')
    cy.contains('LOG IN').should('be.visible')
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
    cy.contains('This field is required').should('be.visible')
    cy.get("[data-TestId='CorrectIcon']").should('not.exist')
  })

  it('show georgian content if user selects georgian language', () => {
    cy.get("[data-TestId='Language']").select('Georgian', { force: true })
    cy.contains('კეთილი იყოს თქვენი მობრძანება').should('be.visible')
    cy.contains('არ გაქვთ აგარიში? დარეგისტრირდი უფასოდ').should('be.visible')
    cy.contains('დაიმახსოვრეთ მოწყობილობა').should('be.visible')
    cy.contains('დაგავიწყდათ პაროლი?').should('be.visible')
    cy.contains('ქართული').should('be.visible')
    cy.contains('პაროლი').should('be.visible')
    cy.contains('სახელი').should('be.visible')
    cy.contains('შესვლა').should('be.visible')
    cy.contains(
      'კეთილი იყოს თქვენი მობრძანება! გთხოვთ შეიყვანეთ მონაცემები'
    ).should('be.visible')
  })

  it('when georgian language is selected show georgian error messages', () => {
    cy.get("[data-TestId='Language']").select('Georgian')
    cy.get("[data-TestId='GreenBtn']").click()
    cy.get("[data-TestId='ErrorIcon']").should('be.visible')
    cy.get("[data-TestId='CorrectIcon']").should('not.exist')
    cy.contains('ამ ველის შევსება სავალდებულოა').should('be.visible')
    cy.contains(
      'მომხმარებლის სახელი უნდა იყოს უნიკალური, უნდა შედგებოდეს მინ 3 სიმბოლოსგან'
    ).should('be.visible')
  })

  it('if user log in with unregistered username and password then show error', () => {
    cy.get("[data-TestId='Username']").type('The Saba')
    cy.get("[data-TestId='CorrectIcon']").should('be.visible')
    cy.get("[data-TestId='ErrorIcon']").should('not.exist')
    cy.get("[data-TestId='Password']").type('Saba', { force: true })
    cy.get("[data-TestId='GreenBtn']").click()
    cy.contains('Name not found').should('be.visible')
    cy.contains('Password did not match').should('be.visible')
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
