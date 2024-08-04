import { SauceDemoFeature } from '../features/sauceDemo'
import { HelperFeature } from '../features/helper'

const sauce: SauceDemoFeature = new SauceDemoFeature()
const helper: HelperFeature = new HelperFeature()

describe('Sauce Demo', () => {
  beforeEach(() => {
    sauce.visitSauceDemoPage()
    sauce.login()
  })

  it('Home page check', () => {
    sauce.assertHomePage()
  })
})
