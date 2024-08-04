import { credentials } from '../../code/utils/credentials'
import { sauceUsers } from '../../code/utils/users'
import { selectors } from '../utils/selectors'

export class SauceDemo {
  public visitSauceDemo = () => {
    cy.visit(credentials.sauceDemoUrl)
  }

  public login = () => {
    cy.get(selectors.username).type(sauceUsers.standard_user.username)
    cy.get(selectors.password).type(sauceUsers.standard_user.password)
    cy.get(selectors.loginButton).click()
  }

  public assertHomePage = () => {
    cy.get(selectors.title)
      .contains(credentials.sauceDemoTitle)
      .should('be.visible')
  }
}
