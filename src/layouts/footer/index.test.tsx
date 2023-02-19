import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '.';

describe('Footer component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

//   it('contains the logo image', () => {
//     const wrapper = shallow(<Footer />);
//     const logo = wrapper.find('Image');
//     expect(logo.exists()).toBe(true);
//     expect(logo.prop('alt')).toEqual('logo');
//   });

  it('contains the social media icons', () => {
    const wrapper = shallow(<Footer />);
    const socialIcons = wrapper.find('Icon');
    expect(socialIcons.length).toEqual(3);
  });

  it('contains the links', () => {
    const wrapper = shallow(<Footer />);
    const links = wrapper.find('a');
    expect(links.length).toEqual(15);
  });
});
