import { createContext, ReactNode, useState } from 'react'

type CharactersContextProviderProps = {
  children: ReactNode
}

type CharactersContextType = {
  searchedCharName: string
  onSearchChange: (charName: string) => void
}

export const CharactersContext = createContext({} as CharactersContextType)

export default function CharactersContextProvider({ children }: CharactersContextProviderProps) {
  const [searchedCharName, setSearchedCharName] = useState<string>('')

  function onSearchChange(charName: string) {
    setSearchedCharName(charName)
  }

  return (
    <CharactersContext.Provider 
      value={{ searchedCharName, onSearchChange }}
    >
      {children}
    </CharactersContext.Provider>
  )
}
