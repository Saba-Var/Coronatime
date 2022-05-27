import '@cypress/code-coverage/support'
import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      beVisible(v: string): Chainable<Element>
      correctSignUp(): Chainable<Element>
      SignUpErrors(): Chainable<Element>
      notDashboard(): Chainable<Element>
      openMenu(): Chainable<Element>
      LogIn(): Chainable<Element>
    }
  }
}
