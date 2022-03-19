import { mount, shallow } from 'enzyme'
import SkeletonList from '../components/CharsList/SkeletonList/SkeletonList'

const skeletonList = shallow(<SkeletonList />)

it('renders Skeleton List correctly', () => {
  expect(skeletonList).toMatchSnapshot()
})

test('if Skeleton List has 10 items', () => {
  expect(mount(<SkeletonList />).find('.ant-card')).toHaveLength(10)
})
