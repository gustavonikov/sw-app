import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CharactersContextProvider from './contexts/CharsContext'

ReactDOM.render(
  <React.StrictMode>
    <CharactersContextProvider>
      <App />
    </CharactersContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
