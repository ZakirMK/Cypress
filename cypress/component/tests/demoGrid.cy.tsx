import React from 'react'
import Grid from '../../src/components/demoGrid'
import { DemoGridFeature } from '../features/demoGrid'

const demoGrid: DemoGridFeature = new DemoGridFeature()

describe('Grid Component', () => {
  beforeEach(() => {
    cy.mount(<Grid />)
  })

  it('should display the grid component with data', () => {
    demoGrid.checkGridData()
  })

  it('should sort the table by ID', () => {
    demoGrid.checkSortById()
  })

  it('should sort the table by Name', () => {
    demoGrid.checkSortByName()
  })

  it('should search the table by Name', () => {
    demoGrid.checkSearchByName()
  })
})
