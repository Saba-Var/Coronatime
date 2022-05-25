/// <reference types="cypress" />

describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.LogIn()
  })

  it('user can see all components with translation of dashboard page: worldwide section', () => {
    cy.contains('New cases').should('be.visible')
    cy.contains('Recovered').should('be.visible')
    cy.contains('Deaths').should('be.visible')
    cy.get("[data-TestId='Language']").select('Georgian')
    cy.contains('ახალი შემთხვევა').should('be.visible')
    cy.contains('გამოჯანმრთელდა').should('be.visible')
    cy.contains('სიკვდილი').should('be.visible')
    cy.contains('მსოფლიო').should('be.visible')
    cy.contains('გასვლა').should('be.visible')
    cy.contains('ქართული').should('be.visible')
  })

  it('user can log out and back to log in page', () => {
    cy.get("[data-TestId='LogOut']").click()
    cy.notDashboard()
  })

  it('user can see menu bar on small device when they click svg icon and also can log out', () => {
    cy.openMenu()
    cy.get("[data-TestId='overlay']").click()
    cy.contains('Log Out').should('not.be.visible')
    cy.get("[data-TestId='overlay']").should('not.exist')
    cy.openMenu()
    cy.get("[data-TestId='LogOut']").click({ multiple: true, force: true })
    cy.url().should('not.include', '/Dashboard/Worldwide')
    cy.notDashboard()
    cy.contains('Welcome back').should('be.visible')
  })

  it('User can see country list and search and sort them', () => {
    cy.request({
      url: 'https://coronatime-api.devtest.ge/api/countries',
      headers: {
        Authorization: 'Token ' + localStorage.getItem('token'),
        accept: 'application/json',
      },
    }).then((res) => expect(res.status))
    cy.get("[data-TestId='byCountry']").click()
    cy.get("[data-TestId='Search']")
      .type('Pan', { force: true, delay: 400 })
      .wait(4000)
    cy.contains('Panama').should('be.visible')
    cy.get("[data-TestId='Language']").select('Georgian')
    cy.get("[data-TestId='Search']").clear()
    cy.contains('ავღანეთი').should('be.visible')
    cy.get("[data-TestId='Location']").click()
    cy.contains('ჰონკონგი').should('be.visible')
    cy.get("[data-TestId='confirmed']").click()
    cy.contains('4,919').should('be.visible')
    cy.get("[data-TestId='deaths']").click()
    cy.contains('იაპონია').should('be.visible')
    cy.get("[data-TestId='Language']").select('ინგლისური')
    cy.get("[data-TestId='recovered']").click()
    cy.contains('Panama').should('be.visible')
    cy.get("[data-TestId='Search']").type('!')
    cy.contains('Country not found!').should('be.visible')
    cy.get("[data-TestId='Language']").select('Georgian')
    cy.contains('ქვეყანა ვერ მოიძებნა').should('be.visible')
  })

  it('if country name is incorrect show message', () => {
    cy.get("[data-TestId='byCountry']").click()
    cy.get("[data-TestId='Search']").type('mars', { force: true })
    cy.beVisible('Country not found!')
  })

  it('if there is no token in a localStorage then redirect to login page', () => {
    cy.intercept('GET', 'https://coronatime-api.devtest.ge/api/countries', {
      statusCode: 500,
    })
    cy.clearLocalStorage()
    cy.reload()
    cy.url().should('not.include', '/Dashboard/Worldwide')
    cy.url().should('not.include', '/Dashboard/By-country')
  })
})
