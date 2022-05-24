import '@cypress/code-coverage/support'
import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      LogIn(): Chainable<Element>
    }
  }
}
