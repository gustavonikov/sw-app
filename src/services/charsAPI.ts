import { notification } from 'antd'
import { CharactersData } from '../types/swapi'
import { fetchWithCacheAPI } from '../helpers/cacheApi'

const SWAPI_CHARS_URL = 'https://swapi.dev/api/people'

async function getCharactersData(charName: string, page: number) {
  try {
    const url = `${SWAPI_CHARS_URL}?search=${charName}&page=${page}`
    const charsData: CharactersData | undefined = 
      await fetchWithCacheAPI(url, `swapi-${charName}-${page}`)

    return charsData
  } catch (error: unknown) {
    notification.error({
      message: 'Oops! Aconteceu algo inesperado',
      description: 'Não foi possível encontrar seus personagens, talvez se juntaram à Força :(',
      duration: 7,
    })

    if (error instanceof Error) {
      throw new Error(error.message) 
    } 

    console.error(error)
    return
  }
}

export default {
  getCharactersData,
}