import { shallow } from 'enzyme'
import SkeletonList from '../components/CharsList/SkeletonList/SkeletonList'

const skeletonList = shallow(<SkeletonList />)

it('renders Skeleton List correctly', () => {
  expect(skeletonList).toMatchSnapshot()
})

