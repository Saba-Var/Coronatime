import '@cypress/code-coverage/support'
import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      notDashboard(): Chainable<Element>
      openMenu(): Chainable<Element>
      LogIn(): Chainable<Element>
    }
  }
}
