import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';
describe('Button', () => {
  it('renders with the default primary style and medium size, and displays the children passed as a prop', () => {
    const wrapper = shallow(<Button>Click me</Button>);
    expect(wrapper.hasClass('bg-green')).toBeTruthy();
    expect(wrapper.find('span').hasClass('text-white')).toBeTruthy();
    expect(wrapper.hasClass('px-6')).toBeTruthy();
    expect(wrapper.hasClass('py-2')).toBeTruthy();
    expect(wrapper.text()).toEqual('Click me');
  });

  it('calls the onClick function when the button is clicked', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Button onClick={handleClick}>Click me</Button>);
    wrapper.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders with the secondary style and large size', () => {
    const wrapper = shallow(<Button type="secondary" size="lg">Click me</Button>);
    expect(wrapper.hasClass('bg-orange')).toBeTruthy();
    expect(wrapper.find('span').hasClass('text-white')).toBeTruthy();
    expect(wrapper.hasClass('px-10')).toBeTruthy();
    expect(wrapper.hasClass('py-4')).toBeTruthy();
    expect(wrapper.text()).toEqual('Click me');
  });

  it('renders with the white style and medium size', () => {
    const wrapper = shallow(<Button type="white">Click me</Button>);
    expect(wrapper.hasClass('bg-white')).toBeTruthy();
    expect(wrapper.hasClass('px-6')).toBeTruthy();
    expect(wrapper.find('span').hasClass('text-black')).toBeTruthy();
    expect(wrapper.hasClass('py-2')).toBeTruthy();
    expect(wrapper.text()).toEqual('Click me');
  });

  it('renders with the disable style and large size', () => {
    const wrapper = shallow(<Button type="disable" size="lg">Click me</Button>);
    expect(wrapper.hasClass('bg-gray')).toBeTruthy();
    expect(wrapper.hasClass('px-10')).toBeTruthy();
    expect(wrapper.find('span').hasClass('text-black')).toBeTruthy();
    expect(wrapper.hasClass('py-4')).toBeTruthy();
    expect(wrapper.text()).toEqual('Click me');
  });

  it('applies the className prop to the button element', () => {
    const wrapper = shallow(<Button className="custom-class">Click me</Button>);
    expect(wrapper.hasClass('custom-class')).toBeTruthy();
  });

  it('renders without any children', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.text()).toEqual('');
  });
});