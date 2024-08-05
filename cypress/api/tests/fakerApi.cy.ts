import { credentials } from '../../code/utils/credentials'

const addressEndpoint = credentials.fakerBaseUrl + '/addresses?_quantity=1'
const bookEndpoint = credentials.fakerBaseUrl + '/books?_quantity=1'

describe('REST API Testing', () => {
  it('should retrieve informations about an Address', () => {
    cy.request('GET', addressEndpoint).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.be.an('array').to.has.length(1)

      const address = response.body.data[0]
      expect(address).to.have.property('buildingNumber').to.be.a('string')
      expect(address).to.have.property('city').to.be.a('string')
      expect(address).to.have.property('country').to.be.a('string')
      expect(address).to.have.property('county_code').to.be.a('string')
      expect(address).to.have.property('id').to.be.a('number')
      expect(address).to.have.property('latitude').to.be.a('number')
      expect(address).to.have.property('longitude').to.be.a('number')
      expect(address).to.have.property('street').to.be.a('string')
      expect(address).to.have.property('streetName').to.be.a('string')
      expect(address).to.have.property('zipcode').to.be.a('string')
    })
  })

  it('should retrieve informations about a book', () => {
    cy.request('GET', bookEndpoint).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.be.an('array').to.has.length(1)

      const book = response.body.data[0]
      expect(book).to.have.property('author').to.be.a('string')
      expect(book).to.have.property('description').to.be.a('string')
      expect(book).to.have.property('genre').to.be.a('string')
      expect(book).to.have.property('id').to.be.a('number')
      expect(book).to.have.property('image').to.be.a('string')
      expect(book).to.have.property('isbn').to.be.a('string')
      expect(book).to.have.property('published').to.be.a('string')
      expect(book).to.have.property('publisher').to.be.a('string')
      expect(book).to.have.property('title').to.be.a('string')
      expect(book).to.have.property('author').to.be.a('string')
    })
  })
})
