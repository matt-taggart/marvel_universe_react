import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Map } from 'immutable';
import reducer from '../../reducers/series';
import { 
  SERIES_FETCH_SUCCEEDED,
  SELECTED_SERIES_FETCH_SUCCEEDED,
  SERIES_SEARCH_SUCCEEDED,
} from '../../constants/series';

Enzyme.configure({ adapter: new Adapter() });

describe('Series Reducer', () => {
  const initialState = new Map({
    series: [],
    selectedSeries: {},
  });

  it('Should return the initial state', () => {    
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Should handle SERIES_FETCH_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: SERIES_FETCH_SUCCEEDED,
        series: [
          { id: 1, name: 'spiderman' },
        ],
      }),
    ).toEqual(new Map({
      series: [
        { id: 1, name: 'spiderman' },
      ],
    }));
  });

  it('Should handle SERIES_SEARCH_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: SERIES_SEARCH_SUCCEEDED,
        series: [
          { id: 1, name: 'spiderman' },
        ],
      }),
    ).toEqual(new Map({
      series: [
        { id: 1, name: 'spiderman' },
      ],
    }));
  });

  it('Should handle SELECTED_SERIES_FETCH_SUCCEEDED', () => {
    expect(
      reducer(new Map(), {
        type: SELECTED_SERIES_FETCH_SUCCEEDED,
        series: { id: 1, name: 'spiderman' },
      }),
    ).toEqual(new Map({
      selectedSeries: { id: 1, name: 'spiderman' },
    }));
  });
});
