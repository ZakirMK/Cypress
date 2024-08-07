import { PokeApi } from '../../code/pokeApi/pokeApi'

const pokeApi: PokeApi = new PokeApi()

export class PokeApiFeature {
  public pokemonNameQuery = (): string => {
    return pokeApi.pokemonNameQuery()
  }

  public pokemonAbilityQuery = (): string => {
    return pokeApi.pokemonAbilityQuery()
  }

  public pokemonNameSearchInput = (nameILike: string) => {
    return pokeApi.pokemonNameSearchInput(nameILike)
  }

  public getInfoAboutPokemon = () => {
    pokeApi.getInfoAboutPokemon()
  }

  public getInfoAboutPokemonAbilities = () => {
    pokeApi.getInfoAboutPokemonAbilities()
  }
}
