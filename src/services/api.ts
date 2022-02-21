import { CharactersData } from '../types/swapi'

const SWAPI_CHARS_URL = 'https://swapi.dev/api/people'

const getCharactersData = async (searchedCharName: string, page: number) : Promise<CharactersData> => {
  try {
    const responseData = await fetch(`${SWAPI_CHARS_URL}?search=${searchedCharName}&page=${page}`)
    const charsData: CharactersData = await responseData.json()

    return charsData
  } catch (_) {
    throw new Error('Não conseguimos achar nenhum personagem com esse nome :(')
  }
}

export default {
  getCharactersData,
}