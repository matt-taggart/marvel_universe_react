import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SideBar from '../../components/navigation/sidebar';

Enzyme.configure({ adapter: new Adapter() })

describe('Sidebar Component', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<SideBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
