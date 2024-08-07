import { FakeApiFeature } from '../../api/features/fakeApi'

const fakeApi: FakeApiFeature = new FakeApiFeature()

describe('REST API Testing', () => {
  it('should retrieve informations about an Address', () => {
    fakeApi.getInfoAboutAdress()
  })

  it('should retrieve informations about a book', () => {
    fakeApi.getInfoAboutBook()
  })
})
