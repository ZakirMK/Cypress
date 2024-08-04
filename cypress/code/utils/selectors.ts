import { remove, zip } from 'cypress/types/lodash'

export const selectors = {
  body: 'body',
  username: '[data-test="username"]',
  password: '[data-test="password"]',
  loginButton: '[data-test="login-button"]',
  title: '[data-test="title"]',
  inventoryItem: '[data-test="inventory-item"]',
  inventoyryName: '[data-test="inventory-item-name"]',
  inventoryItemPrice: '[data-test="inventory-item-price"]',
  addToCartButton: '[class="btn btn_primary btn_small btn_inventory "]',
  removeCartButton: '[class="btn btn_secondary btn_small btn_inventory "]',
  shoppingCard: '[data-test="shopping-cart-link"]',
  shopCardBadge: '[data-test="shopping-cart-badge"]',
  checkoutButton: '[data-test="checkout"]',
  firstName: '[data-test="firstName"]',
  lastName: '[data-test="lastName"]',
  zipCode: '[data-test="postalCode"]',
  continueButton: '[data-test="continue"]',
  summaryInfo: '[class="summary_info"]',
  finishButton: '[data-test="finish"]',
  completeHeader: '[data-test="complete-header"]',
}
