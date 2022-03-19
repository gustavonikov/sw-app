import { createContext, ReactNode, useState } from 'react'


type CharactersContextProviderProps = {
  children: ReactNode
}

type CharactersContextType = {
  searchedCharName: string
  onSearchChange: (charName: string) => void
  charsLoading: boolean
  setCharsLoadingState: (loadingState: boolean) => void
  listPage: number
  setPage: (page: number) => void
}

export const CharactersContext = createContext({} as CharactersContextType)

export default function CharactersContextProvider({ children }: CharactersContextProviderProps) {
  const [searchedCharName, setSearchedCharName] = useState<string>('')
  const [charsLoading, setCharsLoading] = useState<boolean>(false)
  const [listPage, setListPage] = useState<number>(1)

  function onSearchChange(charName: string) {
    setSearchedCharName(charName)
  }

  function setCharsLoadingState(loadingState: boolean) {
    setCharsLoading(loadingState)
  }

  function setPage(page: number) {
    setListPage(page)
  }

  return (
    <CharactersContext.Provider 
      value={{ searchedCharName, onSearchChange, charsLoading, setCharsLoadingState, listPage, setPage }}
    >
      {children}
    </CharactersContext.Provider>
  )
}
