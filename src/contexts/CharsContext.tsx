import { createContext, ReactNode, useEffect, useState } from 'react'
import api from '../services/api'
import Character from '../types/Characters'

type CharactersContextProviderProps = {
  children: ReactNode
}

type CharactersContextType = {
  characters: Character[]
  searchedCharName: string
  onSearchChange: (param: string) => void
}

export const CharactersContext = createContext({} as CharactersContextType)

export default function CharactersContextProvider({ children }: CharactersContextProviderProps) {
  const [characters, setCharacters] = useState<Character[]>([])
  const [searchedCharName, setSearchedCharName] = useState<string>('')

  const filteredCharacters = characters
    .filter(char => char.name.toLowerCase().includes(searchedCharName.toLowerCase()))

  useEffect(() => {
    api.getCharacters()
      .then((chars) => {
        setCharacters(chars)
      })
      .catch(error => console.log(error))
  
  }, [])

  function onSearchChange(charName: string) {
    setSearchedCharName(charName)
  }

  return (
    <CharactersContext.Provider value={{ characters: filteredCharacters, searchedCharName, onSearchChange }}>
      {children}
    </CharactersContext.Provider>
  )
}
