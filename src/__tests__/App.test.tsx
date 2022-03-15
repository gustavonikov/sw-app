import { shallow } from 'enzyme'
import App from '../App'

test('renders App component', () => {
  expect(shallow(<App />)).toBeTruthy()
})
