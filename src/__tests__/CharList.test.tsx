import { mount } from 'enzyme'
import CharList from '../components/CharsList/CharList'
import SkeletonList from '../components/CharsList/SkeletonList/SkeletonList'

describe('while loading', () => {
  test('if renders skeleton list if it is loading', () => {
    const CharListComponent = mount(
      <CharList 
        characters={[]}
        charactersTotal={0}
        onPageChange={jest.fn(page => console.log(page))}
        loading={true} 
        page={1}
      />
    )
    
    expect(CharListComponent.containsMatchingElement(<SkeletonList />)).toBeTruthy()
  })
})

describe('tests without any character data' , () => {
  const CharListComponent = mount(
    <CharList 
      characters={[]}
      charactersTotal={0}
      onPageChange={jest.fn(page => console.log(page))}
      loading={false} 
      page={1}
    />
  )
  
  it('does not renders skeleton if it is not loading', () => {
    expect(CharListComponent.containsMatchingElement(<SkeletonList />)).toBeFalsy()
  })
  
  it('checks if props are be receiving correctly', () => {
    expect(CharListComponent.props().characters).toHaveLength(0)
    expect(CharListComponent.props().charactersTotal).toEqual(0)
  })
})

const charactersMock =[
  {
    'name': 'Luke Skywalker',
    'height': '172',
    'mass': '77'
  }, 
  {
    'name': 'R2-D2',
    'height': '96',
    'mass': '32'
  }, 
  {
    'name': 'Darth Vader',
    'height': '202',
    'mass': '136',
  }, 
  {
    'name': 'Leia Organa',
    'height': '150',
    'mass': '49',
  }, 
  {
    
    'name': 'Owen Lars',
    'height': '178',
    'mass': '120',
  }, 
  {
    'name': 'Beru Whitesun lars',
    'height': '165',
    'mass': '75',
  },
  {
    'name': 'R5-D4',
    'height': '97',
    'mass': '32',
  },
  {
    'name': 'Biggs Darklighter',
    'height': '183',
    'mass': '84',
  },
  {
    'name': 'Obi-Wan Kenobi',
    'height': '182',
    'mass': '77',
  },
  {
    'name': 'C-3PO',
    'height': '167',
    'mass': '75',
  },
  {
    'name': 'Luke Skywalker',
    'height': '172',
    'mass': '77'
  }, 
  {
    'name': 'R2-D2',
    'height': '96',
    'mass': '32'
  }, 
  {
    'name': 'Darth Vader',
    'height': '202',
    'mass': '136',
  }, 
  {
    'name': 'Leia Organa',
    'height': '150',
    'mass': '49',
  }, 
  {
    
    'name': 'Owen Lars',
    'height': '178',
    'mass': '120',
  }, 
  {
    'name': 'Beru Whitesun lars',
    'height': '165',
    'mass': '75',
  },
  {
    'name': 'R5-D4',
    'height': '97',
    'mass': '32',
  },
  {
    'name': 'Biggs Darklighter',
    'height': '183',
    'mass': '84',
  },
  {
    'name': 'Obi-Wan Kenobi',
    'height': '182',
    'mass': '77',
  },
  {
    'name': 'C-3PO',
    'height': '167',
    'mass': '75',
  },
  {
    'name': 'R5-D4',
    'height': '97',
    'mass': '32',
  },
  {
    'name': 'Biggs Darklighter',
    'height': '183',
    'mass': '84',
  },
  {
    'name': 'Obi-Wan Kenobi',
    'height': '182',
    'mass': '77',
  },
  {
    'name': 'C-3PO',
    'height': '167',
    'mass': '75',
  },
]

describe('validate if characters data are being rendered correctly', () => {
  const charactersSample = charactersMock.filter((_, index) => index < 9)
  const CharListComponent = mount(
    <CharList 
      characters={charactersSample}
      charactersTotal={charactersSample.length}
      onPageChange={jest.fn(page => console.log(page))}
      loading={false} 
      page={1}
    />
  )

  test('if the number of list items corresponds to the number of characters', () => {
    expect(CharListComponent.find('.ant-list-item')).toHaveLength(charactersSample.length)
  })

  test('if characters characteristics are being displayed', () => {
    const characterName = CharListComponent.find('.ant-card-head-title').first().text()
    const characterHeight = CharListComponent.find('.attributes > li').first().text().replace('Altura (cm): ', '')
    // not ideal, but its a work around if you didn't put any attribute to identify better
    const characterWeight = CharListComponent.find('.attributes > li').at(1).text().replace('Peso (kg): ', '') 

    expect(characterName).toBe(charactersMock[0].name)
    expect(characterHeight).toBe(charactersMock[0].height)
    expect(characterWeight).toBe(charactersMock[0].mass)
  })
})

describe('pagination', () => {
  const onPageChange = jest.fn()

  const CharListComponent = mount(
    <CharList 
      characters={charactersMock}
      charactersTotal={charactersMock.length}
      onPageChange={onPageChange}
      page={1}
      loading={false} 
    />
  )

  it('only shows 10 characters for page even if it have more', () => {
    expect(CharListComponent.props().charactersTotal).toBeGreaterThan(10)
    expect(CharListComponent.find('.ant-list-item')).toHaveLength(10)
  })

  it('should call onChange function when page changes', () => {
    const charsListPageOne = CharListComponent.find('.ant-pagination-item-1')
    expect(charsListPageOne.hasClass('ant-pagination-item-active')).toBeTruthy()
    
    const charsListPageThree = CharListComponent.find('.ant-pagination-item-3')
    charsListPageThree.simulate('click')
    expect(onPageChange).toHaveBeenCalled()
  })
})
