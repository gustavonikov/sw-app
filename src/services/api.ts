import Character from '../types/Characters'

const SWAPI_URL  = 'https://swapi.dev/api'

const getCharacters = async () : Promise<Character[]> => {
  try {
    const responseData = await fetch(`${SWAPI_URL}/people`)
    const chars = await responseData.json()
    console.log('chars :', chars)

    return chars
  } catch (_) {
    throw new Error('Não conseguimos achar os personagens, talvez foram consumidos pela força :(')
  }
}

export default {
  getCharacters
}