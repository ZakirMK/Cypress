import { SauceDemoFeature } from '../features/sauceDemo'
import { HelperFeature } from '../features/helper'

const sauce: SauceDemoFeature = new SauceDemoFeature()
const helper: HelperFeature = new HelperFeature()

describe('Sauce Demo', () => {
  beforeEach(() => {
    sauce.visitSauceDemoPage()
    sauce.login()
  })

  it('Check home page', () => {
    sauce.assertHomePage()
  })

  it('Check home page products', () => {
    sauce.checkHomeProductsAndPrices()
  })

  it('Check add to cart process', () => {
    sauce.checkAddToCartProcess(1) // select a number between 1 and 6 due to the number of items in the inventory
  })

  it('Check ordering item process', () => {
    sauce.checkOrderingItemProcess(2) // select a number between 1 and 6 due to the number of items in the inventory
  })
})
