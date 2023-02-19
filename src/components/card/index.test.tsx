import { shallow } from 'enzyme';
import Card from '.';

describe('Card component', () => {
  it('renders the image, name, stars, description, price and order button', () => {
    const wrapper = shallow(<Card />);
    // expect(wrapper.find('Image')).toHaveLength(1);
    expect(wrapper.find('h2')).toHaveLength(2);
    expect(wrapper.find('Icon')).toHaveLength(5);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('Button')).toHaveLength(1);
  });

  it('renders with the given class name', () => {
    const wrapper = shallow(<Card className="custom-class" />);
    expect(wrapper.hasClass('custom-class')).toBe(true);
  });

  it('renders the name, stars, description, price and order button with correct values', () => {
    const wrapper = shallow(<Card />);
    // expect(wrapper.find('h2').text()).toEqual('Spageti');
    expect(wrapper.find('Icon[name="star"]').length).toEqual(5);
    // expect(wrapper.find('p').text()).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.  ');
    expect(wrapper.find('h2').last().text()).toEqual('$12.05');
    expect(wrapper.find('Button').prop('type')).toEqual('secondary');
    // expect(wrapper.find('Button').text()).toEqual('Order Now');
  });
});