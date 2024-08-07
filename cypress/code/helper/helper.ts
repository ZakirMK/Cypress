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
}
