import { Card, Skeleton, List } from 'antd'

import './styles.css'

export default function SkeletonList() {
  const skeletonItems = Array.from({length: 10}, () => Math.floor(Math.random() * 10))

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
      dataSource={skeletonItems}
      renderItem={() => (
        <List.Item>
          <Card title={'-'} className="skeleton-card">
            <Skeleton 
              active 
              title={false}
              paragraph={{
                rows: 2,
                width: [100, 100]
              }}
            >
            </Skeleton>
          </Card>
        </List.Item>
      )}
    />
  )
}