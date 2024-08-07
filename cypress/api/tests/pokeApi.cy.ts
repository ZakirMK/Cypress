import { HelperFeature } from '../../e2e/features/helper'
import { credentials } from '../../code/utils/credentials'
import { pokeUsers } from '../../code/utils/users'
import { PokeApiFeature } from '../../api/features/pokeApi'

const helper: HelperFeature = new HelperFeature()
const pokeApi: PokeApiFeature = new PokeApiFeature()

describe('GraphQL API Testing', () => {
  it('should retrieve information about Pokémon with name', () => {
    helper.gqlRequestCall(
      credentials.pokeBaseUrl,
      pokeUsers.admin.username,
      pokeUsers.admin.password,
      pokeApi.pokemonNameQuery(),
      pokeApi.pokemonNameSearchInput('char%'),
    )

    pokeApi.getInfoAboutPokemon()
  })

  it('should retrieve information about Pokémon with name and their abilities', () => {
    helper.gqlRequestCall(
      credentials.pokeBaseUrl,
      pokeUsers.user.username,
      pokeUsers.user.password,
      pokeApi.pokemonAbilityQuery(),
      pokeApi.pokemonNameSearchInput('char%'),
    )

    pokeApi.getInfoAboutPokemonAbilities()
  })
})
