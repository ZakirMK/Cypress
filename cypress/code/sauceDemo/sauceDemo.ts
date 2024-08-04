export class SauceDemo {
    private selectors ={
        body: 'body',
    }

    public visitSauceDemo = () => {
        cy.get(this.selectors.body).should('be.visible')
        cy.visit('https://www.saucedemo.com/')
    }

    public visitHomePage = () => {
        cy.visit('/')
    }
}