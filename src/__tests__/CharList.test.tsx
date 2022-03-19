import { mount, render } from 'enzyme'
import CharList from '../components/CharsList/CharList'
import SkeletonList from '../components/CharsList/SkeletonList/SkeletonList'

test('if renders skeleton list if it is loading', () => {
  const CharListComponentNotLoading = mount(
    <CharList 
      characters={[]}
      charactersTotal={0}
      onPageChange={jest.fn(page => console.log(page))}
      loading={true} 
    />
  )
  
  expect(CharListComponentNotLoading.containsMatchingElement(<SkeletonList />)).toBeTruthy()
})

const CharListComponent = mount(
  <CharList 
    characters={[]}
    charactersTotal={0}
    onPageChange={jest.fn(page => console.log(page))}
    loading={false} 
  />
)

it('does not renders skeleton if it is not loading', () => {
  expect(CharListComponent.containsMatchingElement(<SkeletonList />)).toBeFalsy()
})

it('checks if props are be receiving correctly', () => {
  expect(CharListComponent.props().characters).toHaveLength(0)
  expect(CharListComponent.props().charactersTotal).toEqual(0)
})
