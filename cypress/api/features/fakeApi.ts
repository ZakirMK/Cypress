import { FakeApi } from '../../code/fakeApi/fakeApi'

const fakeApi: FakeApi = new FakeApi()

export class FakeApiFeature {
  public getInfoAboutAdress = () => {
    fakeApi.getInfoAboutAdress()
  }

  public getInfoAboutBook = () => {
    fakeApi.getInfoAboutBook()
  }
}
