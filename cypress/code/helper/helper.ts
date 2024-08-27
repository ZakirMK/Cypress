import { CyHttpMessages } from 'cypress/types/net-stubbing'
import { credentials } from '../../code/utils/credentials'

export let componentTokenString: string = credentials.token

export class Helper {
  public mockSauceDemoEvent = (url: string, alias: string) => {
    cy.intercept('POST', url, {
      statusCode: 200,
      url: url,
      body: {
        message: 'Success',
      },
    }).as(alias)
  }

  public assertSauceEventIsMocked = (alias: string) => {
    cy.wait(`@${alias}`).then((interception) => {
      expect(interception.response.statusCode).to.equal(200)
    })
  }

  public gqlRequestCall = (
    url: string,
    username: string,
    password: string,
    query: string,
    variables: object = {},
  ) => {
    return cy
      .request({
        method: 'POST',
        url: url,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer abcdefghijklmnopqrstuvwxyz1234567890`,
        },
        body: {
          query,
          variables,
        },
      })
      .as('gqlQuery')
  }

  public getAuthTokenComponent(url: string, email: string, password: string) {
    cy.request({
      method: 'POST',
      url: url,
      body: {
        email: email,
        password: password,
      },
    }).then((response) => {
      const componentToken = response.body.token
      cy.wrap(componentToken).as('authTokenComponent')
    })
  }

  public mockComponentApi(
    url: string,
    email: string,
    password: string,
    mockedOperationName: string,
    apiMockCall: any,
  ) {
    this.getAuthTokenComponent(url, email, password)
    cy.get('@authTokenComponent').then(
      (componentToken: JQuery<HTMLElement>) => {
        componentTokenString = componentToken.toString()
        cy.intercept(
          'POST',
          url,
          (req: CyHttpMessages.IncomingHttpRequest<any, any>) => {
            const operationName: any = req.body.operationName
            if (operationName == mockedOperationName) {
              req.reply({ body: apiMockCall })
            }
          },
        ).as('mockComponentApiRequest')
      },
    )
  }
}
