import { SauceDemo } from '../../code/sauceDemo/sauceDemo'

const sauceDemo: SauceDemo = new SauceDemo()

export class SauceDemoFeature {
  public visitSauceDemoPage = () => {
    sauceDemo.visitSauceDemo()
  }

  public login = () => {
    sauceDemo.login()
  }

  public assertHomePage = () => {
    sauceDemo.assertHomePage()
  }

  public checkHomeProductsAndPrices = () => {
    sauceDemo.checkHomeProductsAndPrices()
  }

  public cartIsEmpty = () => {
    sauceDemo.cartIsEmpty()
  }

  public addToCart = (itemIndex: number) => {
    sauceDemo.addToCart(itemIndex) // select a number between 1 and 6 due to the number of items in the inventory
  }

  public assertItemIsAddedToCart = (itemIndex: number) => {
    sauceDemo.assertItemIsAddedToCart(itemIndex) // select same number as above
  }

  public checkAddToCartProcess = (itemIndex: number) => {
    sauceDemo.cartIsEmpty()
    sauceDemo.addToCart(itemIndex)
    sauceDemo.assertItemIsAddedToCart(itemIndex)
  }

  public clickCheckout = () => {
    sauceDemo.clickCheckout()
  }

  public fillAdressForm = () => {
    sauceDemo.fillAdressForm()
  }

  public clickContinue = () => {
    sauceDemo.clickContinue()
  }

  public assertCheckoutReview = () => {
    sauceDemo.assertCheckoutReview()
  }

  public clickFinish = () => {
    sauceDemo.clickFinish()
  }

  public assertOrderComplete = () => {
    sauceDemo.assertOrderComplete()
  }

  public checkOrderingItemProcess = (itemIndex: number) => {
    this.checkAddToCartProcess(itemIndex)
    sauceDemo.clickCheckout()
    sauceDemo.fillAdressForm()
    sauceDemo.clickContinue()
    sauceDemo.assertCheckoutReview()
    sauceDemo.clickFinish()
    sauceDemo.assertOrderComplete()
  }
}
