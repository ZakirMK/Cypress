import { SauceDemoFeature } from '../features/sauceDemo'

const sauce: SauceDemoFeature = new SauceDemoFeature ()

describe('Sauce Demo', () => {
    beforeEach(() => {
      sauce.visitSauceDemoPage()
    })
  
    it('Visit SauceDemo page', () => {
      cy.wait(1000);
    })
})