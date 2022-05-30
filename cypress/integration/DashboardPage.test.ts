/// <reference types="cypress" />

describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.LogIn()
  })

  it('user can see all components with translation of dashboard page: worldwide section', () => {
    cy.beVisible('New cases')
    cy.beVisible('Recovered')
    cy.beVisible('Deaths')
    cy.get("[data-TestId='Language']").click()
    cy.get("[data-TestId='ge']").click()
    cy.beVisible('ახალი შემთხვევა')
    cy.beVisible('გამოჯანმრთელდა')
    cy.beVisible('სიკვდილი')
    cy.beVisible('მსოფლიო')
    cy.beVisible('გასვლა')
    cy.beVisible('ქართული')
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
    cy.beVisible('Welcome back')
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
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get("[data-TestId='Search']")
      .type('Pan', { force: true, delay: 400 })
      .wait(4000)
    cy.beVisible('Panama')
    cy.get("[data-TestId='Language']").click()
    cy.get("[data-TestId='ge']").click()
    cy.get("[data-TestId='Search']").clear()
    cy.beVisible('ავღანეთი')
    cy.get("[data-TestId='Location']").click()
    cy.beVisible('ჰონკონგი')
    cy.get("[data-TestId='confirmed']").click()
    cy.beVisible('4,919')
    cy.get("[data-TestId='deaths']").click()
    cy.beVisible('იაპონია')
    cy.get("[data-TestId='Language']").click()
    cy.get("[data-TestId='en']").click()
    cy.get("[data-TestId='recovered']").click()
    cy.beVisible('Panama')
    cy.get("[data-TestId='Search']").type('!')
    cy.beVisible('Country not found!')
    cy.get("[data-TestId='Language']").click()
    cy.get("[data-TestId='ge']").click()
    cy.beVisible('ქვეყანა ვერ მოიძებნა')
  })

  it('if country name is incorrect show message', () => {
    cy.get("[data-TestId='byCountry']").click()
    cy.get("[data-TestId='Search']").type('mars', { force: true })
    cy.beVisible('Country not found!')
  })

  it('if there is no token in a localStorage then redirect to LogIn page', () => {
    cy.intercept('GET', 'https://coronatime-api.devtest.ge/api/countries', {
      statusCode: 500,
    })
    cy.clearLocalStorage()
    cy.reload()
    cy.url().should('not.include', '/Dashboard/Worldwide')
    cy.url().should('not.include', '/Dashboard/By-country')
  })
})
