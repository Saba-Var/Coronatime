/// <reference types="cypress" />

describe('Sign up page', () => {
  beforeEach(() => {
    cy.visit('Sign-up')
  })

  it('user can see all components with translation of sign up page', () => {
    cy.beVisible('Username should be unique, min 3 symbols')
    cy.beVisible('Please enter required info to sign up')
    cy.beVisible('Already have an account? Log in')
    cy.beVisible('Welcome to CoronaTime')
    cy.beVisible('Repeat Password')
    cy.beVisible('Username')
    cy.beVisible('Password')
    cy.beVisible('SIGN UP')
    cy.beVisible('English')
    cy.beVisible('Email')
    cy.get("[data-TestId='Language']").click({ force: true })
    cy.get("[data-TestId='ge']").click({ force: true })
    cy.beVisible('კეთილი იყოს თქვენი მობრძანება კორონათაიმზე')
    cy.beVisible('შეიყვანეთ მოთხოვნილი ინფორმაცია')
    cy.beVisible('უკვე გაქვთ ანგარიში? შესვლა')
    cy.beVisible('გაიმეორეთ პაროლი')
    cy.beVisible('რეგისტრაცია')
    cy.beVisible('ელ-ფოსტა')
    cy.beVisible('ქართული')
    cy.beVisible('სახელი')
    cy.beVisible('პაროლი')
    cy.beVisible(
      'მომხმარებლის სახელი უნდა იყოს უნიკალური, უნდა შედგებოდეს მინ 3 სიმბოლოსგან'
    )
  })

  it('show error messages when inputs are invalid', () => {
    cy.SignUpErrors()
  })

  it('user can go to the LogIn page', () => {
    cy.get("[data-TestId='Question']").click()
    cy.url().should('not.include', '/Sign-up')
  })

  it('show no errors if input fields are valid', () => {
    cy.SignUpErrors()
    cy.get("[data-TestId='Username']").clear().type('Saba')
    cy.get("[data-TestId='Email']").clear().type('sabavar@redberry.ge')
    cy.get("[data-TestId='Password']").clear().type('Saba')
    cy.get("[data-TestId='Repeat Password']")
      .clear()
      .type('Saba', { force: true })
    cy.get("[data-TestId='CorrectIcon']").should('be.visible')
    cy.get("[data-TestId='ErrorIcon']").should('not.exist')
  })

  it('show error alert when username and email are taken or email have not valid structure', () => {
    cy.correctSignUp()
    cy.get("[data-TestId='ErrorIcon']").should('not.exist')
    cy.get("[data-TestId='GreenBtn']").click()
    cy.beVisible('this username is already taken.')
    cy.get("[data-TestId='CloseIcon']").click()
    cy.contains('this username is already taken.').should('not.be.visible')
    cy.get("[data-TestId='Username']").type('saba-var')
    cy.get("[data-TestId='GreenBtn']").click()
    cy.beVisible('this email is already taken.')
    cy.get("[data-TestId='ErrorIcon']").should('be.visible')
    cy.get("[data-TestId='CloseIcon']").click()
    cy.get("[data-TestId='ErrorIcon']").should('not.be.visible')
    cy.get("[data-TestId='Email']").type('s', { delay: 1600 })
    cy.get("[data-TestId='GreenBtn']").click()
    cy.beVisible('email field should have valid email structure.')
    cy.get("[data-TestId='CloseIcon']").click()
    cy.get("[data-TestId='ErrorIcon']").should('not.be.visible')
  })

  it('if inputs are correct send email confirmation to gmail', () => {
    cy.correctSignUp()
    cy.get("[data-TestId='Username']").clear().type('qqqq', { delay: 200 })
    cy.get("[data-TestId='GreenBtn']").click()
    cy.get("[data-TestId='Alert']").should('be.visible', { force: true })
    cy.get("[data-TestId='Username']").clear().type('name', { delay: 200 })
    cy.get("[data-TestId='Email']")
      .clear()
      .type('name@gmail.com', { delay: 200 })
    cy.intercept('POST', 'https://coronatime-api.devtest.ge/api/register', {
      statusCode: 201,
    })
    cy.get("[data-TestId='GreenBtn']").click()
    cy.get("[data-TestId='Alert']").should('not.exist')
    cy.url().should('include', '/Confirmation-email')
    cy.beVisible('We have sent you a confirmation email')
  })
})
