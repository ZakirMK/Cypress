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
}
