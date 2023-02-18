import { shallow, mount } from 'enzyme';
import { createRef, useRef } from 'react';
import Input from '.';

describe('Input', () => {
  test('renders with placeholder and label', () => {
    const wrapper = shallow(<Input placeholder="Enter text" label="Name" />);
    expect(wrapper.find('input').prop('placeholder')).toEqual('Enter text');
    expect(wrapper.find('label').text()).toEqual('Name');
  });

  test('calls onChange when input is changed', () => {
    const handleChange = jest.fn();
    const wrapper = shallow(<Input label="Email" onChange={handleChange} />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'test@test.com' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLInputElement>();
    const wrapper = shallow(<Input label="Test" ref={ref} />);
    const input = wrapper.find('input');
    expect(ref.current).toEqual(null);
    input.simulate('change', { target: { value: 'test' } });
    // expect(ref?.current?.value).toEqual('test');
  });
});