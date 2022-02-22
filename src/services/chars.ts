import { notification } from 'antd'
import { CharactersData } from '../types/swapi'
import { fetchData } from '../utils/cacheApi'

const SWAPI_CHARS_URL = 'https://swapi.dev/pi/people'

const getCharactersData = async (searchedCharName: string, page: number): Promise<CharactersData | any> => {
  try {
    const url = `${SWAPI_CHARS_URL}?search=${searchedCharName}&page=${page}`

    const cachedCharsData = await fetchData(url) 

    return cachedCharsData
  } catch (error: unknown) {
    if (error instanceof Error) {
      notification.error({
        message: 'Oops! Aconteceu algo inesperado',
        description: 'Não foi possível encontrar seus personagens, talvez se juntaram à Força :(',
        duration: 7,
      })
  
      throw new Error(error.message) 
    } 

    console.error(error)
  }
}

export default {
  getCharactersData,
}