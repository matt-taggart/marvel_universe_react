import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Map } from 'immutable';
import reducer from '../../reducers/user';
import { SIGN_IN_SUCCEEDED, LOGOUT_SUCCEEDED } from '../../constants/auth';
import { REGISTRATION_SUCCEEDED, USER_FETCH_SUCCEEDED } from '../../constants/user';

Enzyme.configure({ adapter: new Adapter() });

describe.only('User Reducer', () => {
  const initialState = new Map({
    user: {},
    signedIn: false,
  });

  it('Should return the initial state', () => {    
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Should handle SIGN_IN_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: SIGN_IN_SUCCEEDED,
        user: { name: 'Mickey Mouse' },
      }),
    ).toEqual(new Map({
      user: { name: 'Mickey Mouse' },
      signedIn: true,
    }));
  });

  it('Should handle REGISTRATION_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: REGISTRATION_SUCCEEDED,
        user: { name: 'Mickey Mouse' }
      }),
    ).toEqual(new Map({
      user: { name: 'Mickey Mouse' },
    }));
  });

  it('Should handle USER_FETCH_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: USER_FETCH_SUCCEEDED,
        user: { name: 'Mickey Mouse' },
      }),
    ).toEqual(new Map({
      user: { name: 'Mickey Mouse' },
      signedIn: true,
    }));
  });

  it('Should handle LOGOUT_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: LOGOUT_SUCCEEDED,
      }),
    ).toEqual(initialState);
  });
});
