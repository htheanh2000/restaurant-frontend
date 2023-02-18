import { shallow } from 'enzyme';
import Navigation from '.';

describe('Navigation', () => {
  it('renders without crashing', () => {
    shallow(<Navigation />);
  });

  it('applies custom className', () => {
    const wrapper = shallow(<Navigation className="test-class" />);
    expect(wrapper.find('.test-class').exists()).toBe(true);
  });

  it('displays correct number of navigation items', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find('.w-12')).toHaveLength(6);
  });

  it('renders left and right arrow icons', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find({ name: 'left' })).toHaveLength(1);
    expect(wrapper.find({ name: 'right' })).toHaveLength(1);
  });

  it('renders ellipses icon', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find({ name: 'ellipses' })).toHaveLength(1);
  });
});
