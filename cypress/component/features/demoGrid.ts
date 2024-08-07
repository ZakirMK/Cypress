import { DemoGrid } from '../../code/demoGrid/demoGrid'

const demoGrid: DemoGrid = new DemoGrid()

export class DemoGridFeature {
  public checkGridData = () => {
    demoGrid.checkGridData()
  }

  public checkSortById = () => {
    demoGrid.checkSortById()
  }

  public checkSortByName = () => {
    demoGrid.checkSortByName()
  }

  public checkSearchByName = () => {
    demoGrid.checkSearchByName()
  }
}
