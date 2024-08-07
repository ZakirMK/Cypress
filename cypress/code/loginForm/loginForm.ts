import { selectors } from '../../code/utils/selectors'
import { loginComponentUsers } from '../utils/users'

export class LoginForm {
  public checkLoginForm = () => {
    cy.get(selectors.loginContainer).should('be.visible')
    cy.get(selectors.username)
      .should('be.visible')
      .type(loginComponentUsers.admin.username)
    cy.get(selectors.password)
      .should('be.visible')
      .type(loginComponentUsers.admin.password)
    cy.get(selectors.loginButton).should('be.visible').click()
  }

  public checkLoginError = () => {
    cy.get(selectors.loginContainer).should('be.visible')
    cy.get(selectors.username)
      .should('be.visible')
      .type(loginComponentUsers.user.username)
    cy.get(selectors.password)
      .should('be.visible')
      .type(loginComponentUsers.user.password)
    cy.get(selectors.loginButton).should('be.visible').click()
    cy.get(selectors.errorMessage).should('be.visible')
  }
}
