import { notification } from 'antd'
import { CharactersData } from '../types/swapi'
import { fetchData } from '../helpers/fetchData'

const SWAPI_CHARS_URL = 'https://swapi.dev/api/people'

async function getCharactersData(charName: string, page: number) {
  try {
    const charsData: CharactersData = 
      await fetchData(`${SWAPI_CHARS_URL}?search=${charName}&page=${page}`)

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