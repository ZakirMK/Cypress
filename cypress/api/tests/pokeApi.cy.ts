import { HelperFeature } from '../../e2e/features/helper'
import { credentials } from '../../code/utils/credentials'
import { pokeUsers } from '../../code/utils/users'

const helper: HelperFeature = new HelperFeature()

const pokemonNameQuery = /* GraphQL */ `
  query MyQuery($name: String!) {
    pokemon_v2_pokemon(where: { name: { _ilike: $name } }) {
      id
      name
      height
      order
      pokemon_species_id
      is_default
    }
  }
`

const pokemonAbilityQuery = /* GraphQL */ `
  query MyQuery($name: String!) {
    pokemon_v2_pokemonability(
      where: { pokemon_v2_pokemon: { name: { _ilike: $name } } }
    ) {
      pokemon_v2_pokemon {
        name
        height
        base_experience
      }
      id
      ability_id
      is_hidden
      pokemon_id
      pokemon_v2_ability {
        id
        name
      }
    }
  }
`

const pokemonNameSearchInput = () => ({
  name: 'char%',
})

describe('GraphQL API Testing', () => {
  it('should retrieve information about Pokémon with name', () => {
    helper.gqlRequestCall(
      credentials.pokeBaseUrl,
      pokeUsers.admin.username,
      pokeUsers.admin.password,
      pokemonNameQuery,
      pokemonNameSearchInput(),
    )

    cy.get('@gqlQuery').then((rsp: Cypress.ObjectLike) => {
      expect(rsp.status).to.equal(200)
      const pokemonData = rsp.body.data.pokemon_v2_pokemon
      expect(pokemonData).to.be.an('array').that.is.not.empty

      pokemonData.forEach((pokemon: any) => {
        expect(pokemon).to.have.property('id').that.is.a('number')
        expect(pokemon)
          .to.have.property('name')
          .that.is.a('string')
          .and.match(/^char/i)
        expect(pokemon).to.have.property('height').that.is.a('number')
        expect(pokemon).to.have.property('order').that.is.a('number')
        expect(pokemon)
          .to.have.property('pokemon_species_id')
          .that.is.a('number')
        expect(pokemon).to.have.property('is_default').that.is.a('boolean')
      })
    })
  })

  it('should retrieve information about Pokémon with name and their abilities', () => {
    helper.gqlRequestCall(
      credentials.pokeBaseUrl,
      pokeUsers.user.username,
      pokeUsers.user.password,
      pokemonAbilityQuery,
      pokemonNameSearchInput(),
    )

    cy.get('@gqlQuery').then((rsp: Cypress.ObjectLike) => {
      expect(rsp.status).to.equal(200)
      const pokemonAbilityData = rsp.body.data.pokemon_v2_pokemonability
      expect(pokemonAbilityData).to.be.an('array').that.is.not.empty

      pokemonAbilityData.forEach((pokemon: any) => {
        expect(pokemon).to.have.property('id').that.is.a('number')
        expect(pokemon).to.have.property('ability_id').that.is.a('number')
        expect(pokemon).to.have.property('is_hidden').that.is.a('boolean')
        expect(pokemon).to.have.property('pokemon_id').that.is.a('number')
        expect(pokemon)
          .to.have.property('pokemon_v2_ability')
          .that.is.an('object')
        expect(pokemon.pokemon_v2_ability)
          .to.have.property('id')
          .that.is.a('number')
        expect(pokemon.pokemon_v2_ability)
          .to.have.property('name')
          .that.is.a('string')

        const pokemonInfo = pokemon.pokemon_v2_pokemon
        expect(pokemonInfo).to.have.property('name').that.is.a('string')
        expect(pokemonInfo).to.have.property('height').that.is.a('number')
        expect(pokemonInfo)
          .to.have.property('base_experience')
          .that.is.a('number')
      })
    })
  })
})
