import { useContext, useEffect, useState } from 'react'
import { Layout, Result } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'

import { CharactersContext } from './contexts/CharsContext'
import CharsList from './components/CharsList/CharList'
import SearchBar from './components/SearchBar/SearchBar'
import starsWarsLogo from './assets/swlogo.png'

import './App.css'

import api from './services/charsAPI'

import { parseChars } from './helpers/parseChars'
import { CharactersData } from './types/swapi'

function App() {
  const [charactersData, setCharactersData] = useState<CharactersData>()
  const [hasError, setHasError] = useState<boolean>(false)
  const { 
    searchedCharName, onSearchChange, charsLoading, setCharsLoadingState 
  } = useContext(CharactersContext)

  function getCharactersData(page = 1) {
    setCharsLoadingState(true)
  
    api.getCharactersData(searchedCharName, page)
      .then((charData) => {
        setCharactersData(charData)
      })
      .catch(() => {
        setHasError(true)
      })
      .finally(() => {
        setCharsLoadingState(false)
      })
  }

  useEffect(() => {
    getCharactersData()
  }, [searchedCharName])

  const characters = (charactersData && parseChars(charactersData.results)) || []
  const charactersTotal = (charactersData && charactersData.count) || 0

  return (
    <Layout>
      <Header>
        <img src={starsWarsLogo} alt="star wars logo" />
      </Header>
      <Content>
        {
          hasError ? 
            <Result status="500" title="Servidor indisponível" subTitle="Tente novamente mais tarde." />
            : (
              <>
                <SearchBar onSearch={onSearchChange} />
                <CharsList 
                  charactersTotal={charactersTotal}
                  characters={characters}
                  onPageChange={getCharactersData} 
                  loading={charsLoading} 
                />
              </>
            )
        }
      </Content>
    </Layout>
  )
}

export default App
