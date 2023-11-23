import { shallow } from 'enzyme'
import App from '../App'

test('renders App component', () => {
  expect(shallow(<App />)).toBeTruthy()
})

// se quando carregar o component chama a função getCharactersData
// se seta loading como true quando começa e como false qndo termina
// se quando dá erro exibe o component Result
// se quando dá certo preenche os estados direitinho
// e a imagem no header tá sendo carregada
// se quando buscado um nome, o useEffect trigga chamando o getCharactersData


/* test('if the characters data have name, height and mass only', () => {
  const charactersProperties = Object.keys(charactersSample[0])

  expect(charactersProperties.length).toEqual(3)
  expect(charactersProperties.includes('name')).toBeTruthy()
  expect(charactersProperties.includes('height')).toBeTruthy()
  expect(charactersProperties.includes('mass')).toBeTruthy()
}) */
