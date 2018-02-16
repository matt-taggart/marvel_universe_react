import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { call, takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import { signIn, logout } from '../../__mocks__/auth';

Enzyme.configure({ adapter: new Adapter() });

describe('Auth Sagas', () => {
  it('Should test sign in saga', async () => {   
    const dispatched = [];

    const result = await runSaga({
      dispatch: action => dispatched.push(action),
      getState: () => ({
        form: { 
          signIn: { 
            values: {
              email: 'pikachu@pokemon.com',
              password: 'ash123'
            } 
          }
        }
      })
    }, signIn).done;

    expect(dispatched[0]).toEqual({ type: 'LOADING', payload: true });
    expect(dispatched[1])
      .toEqual({ 
        type: 'SIGN_IN_SUCCEEDED', 
        user: {
          username: 'Pikachu',
          email: 'pikachu@pokemon.com',
        }
      });
    expect(dispatched[2]).toEqual({ type: 'LOADING', payload: false });
  });
});
