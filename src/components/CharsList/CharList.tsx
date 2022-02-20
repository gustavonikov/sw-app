import { List, Card } from 'antd'
import './styles.css'

const data = [
  {
    name: 'Luke Skywalker'
  },
  {
    name: 'Leia Organa'
  },
  {
    name: 'Anakin Skywalker'
  },
  {
    name: 'Han Solo'
  },
  {
    name: 'Luke Skywalker'
  },
  {
    name: 'Leia Organa'
  },
  {
    name: 'Anakin Skywalker'
  },
  {
    name: 'Han Solo'
  },
  {
    name: 'Anakin Skywalker'
  },
  {
    name: 'Han Solo'
  },
  {
    name: 'Ali baba'
  },
  {
    name: 'Anakin Skywalker'
  }
]

export default function CharsList() {
  return (
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
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card title={item.name}>Alo</Card>
        </List.Item>
      )}
      pagination={{disabled: false, responsive: true}}
      className="list"
    />
  )
}