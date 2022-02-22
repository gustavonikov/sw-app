import { notification } from 'antd'
import { CharactersData } from '../types/swapi'

const SWAPI_CHARS_URL = 'https://swapi.dev/api/people'

const getCharactersData = async (searchedCharName: string, page: number) : Promise<CharactersData> => {
  try {
    const responseData = await fetch(`${SWAPI_CHARS_URL}?search=${searchedCharName}&page=${page}`)
    const charsData: CharactersData = await responseData.json()

    return charsData
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    notification.error({
      message: 'Oops! Aconteceu algo inesperado',
      description: 'Não foi possível encontrar seus personagens, talvez se juntaram à Força...',
      duration: 7,
    })

    throw new Error(error.message) 
  }
}

export default {
  getCharactersData,
}