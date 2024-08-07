import { Helper } from '../../code/helper/helper'

const helper: Helper = new Helper()

export class HelperFeature {
  public mockSauceDemoEvent = (url: string, alias: string) => {
    helper.mockSauceDemoEvent(url, alias)
  }

  public assertSauceEventIsMocked = (alias: string) => {
    helper.assertSauceEventIsMocked(alias)
  }

  public gqlRequestCall = (
    url: string,
    username: string,
    password: string,
    query: string,
    variables: object = {},
  ) => {
    return helper.gqlRequestCall(url, username, password, query, variables)
  }
}
