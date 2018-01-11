import React from 'react';
import { Map } from 'immutable';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Nav from '../../components/navigation/nav';

Enzyme.configure({ adapter: new Adapter() })

describe('Nav Component', () => {
  const props = {
    user: new Map({ 
      user: {
        name: 'Timmy',
        age: 25,
      },
      signedIn: true,
    }),
    logout: jest.fn(),
  };

  it('Should render correctly', () => {
    const wrapper = shallow(
      <Nav
        user={props.user}
        logout={props.logout}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call logout on click if signed in', () => {
    const wrapper = shallow(
      <Nav
        user={props.user}
        logout={props.logout}
      />,
    );
    wrapper.find("a.navbar-item").simulate('click');
    expect(props.logout.mock.calls.length).toBe(1);
  });

  it('Should render sign in button if not logged in', () => {
    const wrapper = shallow(
      <Nav
        user={props.user.set('signedIn', false)}
        logout={props.logout}
      />,
    );
    let result = wrapper.find('.title.is-6');
    expect(wrapper.find('.title.is-6').length).toEqual(1);
  });
});
