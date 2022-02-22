import { List, Card, Result } from 'antd'
import { Character } from '../../types/swapi'
import SkeletonList from './SkeletonList/SkeletonList'
import './styles.css'

type CharsListProps = {
  charactersTotal: number
  characters: Character[]
  onPageChange: (page: number) => void
  loading: boolean
  hasError: boolean
}

export default function CharsList(
  { charactersTotal, characters, onPageChange, loading, hasError } : CharsListProps
) {
  
  return (
    hasError ? (
      <Result
        status="500"
        title="Servidor indisponível"
        subTitle="Tente novamente mais tarde."
      />
    ) : loading ?
      <SkeletonList /> :
      (
        <List
          grid={{
            gutter: 24,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 5,
            xxl: 5,
          }}
          dataSource={characters}
          renderItem={item => (
            <List.Item>
              <Card title={item.name}>
                <ul className='attributes'>
                  <li>Altura (cm): {item.height}</li>
                  <li>Peso (kg): {item.mass}</li>
                </ul>
              </Card>
            </List.Item>
          )}
          pagination={{
            disabled: false, 
            onChange: onPageChange, 
            total: charactersTotal,
            showSizeChanger: false,
          }}
        />
      )
  )
}