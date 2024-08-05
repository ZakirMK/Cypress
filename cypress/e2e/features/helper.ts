import { Helper } from '../../code/helper/helper'

const helper: Helper = new Helper()

export class HelperFeature {
  public mockSauceDemoEvent = (url: string, alias: string) => {
    helper.mockSauceDemoEvent(url, alias)
  }

  public assertSauceEventIsMocked = (alias: string) => {
    helper.assertSauceEventIsMocked(alias)
  }
}
