import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { call, takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import {
  fetchComics,
  fetchSelectedComic,
  searchComics,
} from '../../__mocks__/comics';

Enzyme.configure({ adapter: new Adapter() });

describe('Comics Sagas', () => {

  it('Should test fetch comics saga', async () => {   
    const dispatched = [];

    const result = await runSaga({
      dispatch: action => dispatched.push(action),
    }, fetchComics).done;

    expect(dispatched[0]).toEqual({ type: 'LOADING', payload: true });
    expect(dispatched[1])
      .toEqual({ 
        type: 'COMICS_FETCH_SUCCEEDED', 
        comics: [{
          title: 'Spiderman',
          issueNumber: 5,
        }]
      });
    expect(dispatched[2]).toEqual({ type: 'LOADING', payload: false });
  });

  it('Should test fetch selected character saga', async () => {   
    const dispatched = [];

    const result = await runSaga({
      dispatch: action => dispatched.push(action),
    }, fetchSelectedComic, 123).done;

    expect(dispatched[0]).toEqual({ type: 'LOADING', payload: true });
    expect(dispatched[1])
      .toEqual({ 
        type: 'SELECTED_COMIC_FETCH_SUCCEEDED', 
        comic: {
          title: 'Spiderman',
          issueNumber: 5,
        }
      });
    expect(dispatched[2]).toEqual({ type: 'LOADING', payload: false });
  });

  it('Should test search characters saga', async () => {   
    const dispatched = [];

    const result = await runSaga({
      dispatch: action => dispatched.push(action),
    }, searchComics, 123).done;

    expect(dispatched[0]).toEqual({ type: 'LOADING', payload: true });
    expect(dispatched[1])
      .toEqual({ 
        type: 'COMICS_SEARCH_SUCCEEDED', 
        comics: [{
          title: 'Spiderman',
          issueNumber: 5,
        }]
      });
    expect(dispatched[2]).toEqual({ type: 'LOADING', payload: false });
  });
});
