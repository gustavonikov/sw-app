import { mount, shallow } from 'enzyme'
import SearchBar from '../components/SearchBar/SearchBar'

const onSearch = jest.fn()

it('renders search bar', () => {
  const searchComponent = shallow(<SearchBar onSearch={onSearch} />)
  expect(searchComponent).toMatchSnapshot()
})

describe('search behaviour', () => {
  const searchComponent = mount(<SearchBar onSearch={onSearch} />)

  it('triggers onSearch function when a search is made', () => {
    const searchButton = searchComponent.find('.ant-input-group-addon > .ant-input-search-button')
    searchButton.simulate('click')
    expect(onSearch).toHaveBeenCalled()
  })
  
  it('also realizes a search when using the key "enter"', () => {
    const searchBar = searchComponent.find('.ant-input-search .ant-input')
    searchBar.simulate('keydown', { keyCode: 13 })
    expect(onSearch).toHaveBeenCalled()
  })
})