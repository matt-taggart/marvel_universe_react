import { Map } from 'immutable';
import { LOADING } from '../constants/display';

const initialState = new Map({
  loading: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return state.set('loading', action.payload);
    default:
      return state;
  }
};
