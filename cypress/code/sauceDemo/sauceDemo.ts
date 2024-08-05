import { credentials } from '../../code/utils/credentials'
import { sauceUsers } from '../../code/utils/users'
import { selectors } from '../utils/selectors'

let elementNumber: number = 0

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

  public assertItemsAndPricesGotSameLength = () => {
    if (
      credentials.sauceInventoryItems.length !==
      credentials.sauceInventoryItemsPrices.length
    ) {
      throw new Error(
        'Inventory items and prices arrays must be the same length',
      )
    }
  }

  public checkHomeProductsAndPrices = () => {
    this.assertItemsAndPricesGotSameLength()
    credentials.sauceInventoryItems.forEach((inventoryItem, index) => {
      const inventoryItemPrice = credentials.sauceInventoryItemsPrices[index]
      cy.get(selectors.inventoryItem)
        .contains(inventoryItem)
        .should('be.visible')
      cy.get(selectors.inventoryItemPrice)
        .contains(inventoryItemPrice)
        .should('be.visible')
    })
  }

  public cartIsEmpty = () => {
    cy.get(selectors.shopCardBadge).should('not.exist')
  }

  public setElementNumber = (itemIndex: number) => {
    elementNumber = itemIndex - 1
  }

  public addToCart = (itemIndex: number) => {
    this.setElementNumber(itemIndex)
    cy.get(selectors.addToCartButton)
      .should('be.visible')
      .eq(elementNumber)
      .click()
  }

  public assertItemIsAddedToCart = (itemIndex: number) => {
    this.setElementNumber(itemIndex)
    cy.get(selectors.removeCartButton).should('be.visible')
    cy.get(selectors.shopCardBadge).contains('1').should('be.visible')
    cy.get(selectors.shoppingCard).click()
    cy.get(selectors.inventoyryName)
      .contains(credentials.sauceInventoryItems[elementNumber])
      .should('be.visible')
    cy.get(selectors.inventoryItemPrice)
      .contains(credentials.sauceInventoryItemsPrices[elementNumber])
      .should('be.visible')
  }

  public clickCheckout = () => {
    cy.get(selectors.checkoutButton).click()
  }

  public fillAdressForm = () => {
    cy.get(selectors.firstName)
      .should('be.visible')
      .type(credentials.sauceFirstName)
    cy.get(selectors.lastName)
      .should('be.visible')
      .type(credentials.sauceLastName)
    cy.get(selectors.zipCode)
      .should('be.visible')
      .type(credentials.sauceZipCode)
  }

  public clickContinue = () => {
    cy.get(selectors.continueButton).should('be.visible').click()
  }

  public assertCheckoutReview = () => {
    cy.get(selectors.title)
      .contains(credentials.sauceCheckoutTitle)
      .should('be.visible')
    cy.get(selectors.inventoyryName)
      .contains(credentials.sauceInventoryItems[elementNumber])
      .should('be.visible')
    cy.get(selectors.inventoryItemPrice)
      .contains(credentials.sauceInventoryItemsPrices[elementNumber])
      .should('be.visible')
    cy.get(selectors.summaryInfo)
      .contains(credentials.sauceCard)
      .should('be.visible')
    cy.get(selectors.summaryInfo)
      .contains(credentials.sauceShippingInfo)
      .should('be.visible')
    cy.get(selectors.summaryInfo)
      .contains(credentials.sauseTotalPrice)
      .should('be.visible')
  }

  public clickFinish = () => {
    cy.get(selectors.finishButton).should('be.visible').click()
  }

  public assertOrderComplete = () => {
    cy.get(selectors.completeHeader)
      .contains(credentials.sauceCheckoutCompleteTitle)
      .should('be.visible')
  }
}
