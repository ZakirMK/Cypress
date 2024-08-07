import { selectors } from '../../code/utils/selectors'
import sampleData from '../../src/data/sampleData'

export class DemoGrid {
  public checkGridData = () => {
    cy.get(selectors.gridContainer).should('be.visible')
    cy.get(selectors.gridTableHeader).should('be.visible')
    cy.get(selectors.gridTableRow).should('have.length', sampleData.length)
  }

  public checkSortById = () => {
    cy.get(selectors.idColumn).click()
    cy.get(selectors.gridTableRow)
      .first()
      .within(() => {
        cy.get(selectors.rowItem)
          .first()
          .should('contain', String(sampleData.length))
      })

    cy.get(selectors.idColumn).click()
    cy.get(selectors.gridTableRow)
      .first()
      .within(() => {
        cy.get(selectors.rowItem).first().should('contain', 1)
      })
  }

  public checkSortByName = () => {
    cy.get(selectors.nameColumn).click()
    cy.get(selectors.gridTableRow)
      .first()
      .within(() => {
        cy.get(selectors.rowItem).eq(1).should('contain', 'Alice Clark')
      })

    cy.get(selectors.nameColumn).click()
    cy.get(selectors.gridTableRow)
      .first()
      .within(() => {
        cy.get(selectors.rowItem).eq(1).should('contain', 'Tom Davis')
      })
  }

  public checkSearchByName = () => {
    cy.get(selectors.searchInput).type('Jane')
    cy.get(selectors.gridTableRow).should('have.length', 1)
    cy.get(selectors.gridTableRow).within(() => {
      cy.get(selectors.rowItem).eq(1).should('contain', 'Jane Smith')
    })

    cy.get(selectors.searchInput).clear().type('abc')
    cy.get(selectors.gridTableRow).should('have.length', 0)
  }
}
