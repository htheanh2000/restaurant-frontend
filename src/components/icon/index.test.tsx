import React from 'react';
import { shallow } from 'enzyme';
import Icon, { IconName, icons } from '.';

describe('Icon component', () => {
  it('should render an icon', () => {
    const wrapper = shallow(<Icon name='menu' size='md' className='test-class' />);
    const img = wrapper.find('img');
    expect(img).toHaveLength(1);
    expect(img.prop('src')).toEqual(icons.menu);
    expect(img.prop('width')).toEqual(32);
    expect(img.prop('height')).toEqual(32);
    expect(img.prop('className')).toContain('test-class');
  });

  it('should render an icon with default props', () => {
    const wrapper = shallow(<Icon name="menu" />);
    const img = wrapper.find('img');
    expect(img.prop('src')).toEqual(icons.menu);
    expect(img.prop('width')).toEqual(24);
    expect(img.prop('height')).toEqual(24);
  });
});