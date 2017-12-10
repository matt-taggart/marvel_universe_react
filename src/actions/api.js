import { GET_CHARACTERS, GET_SELECTED_CHARACTER } from '../constants/characters';
import { GET_COMICS, GET_SELECTED_COMIC } from '../constants/comics';
import { GET_CREATORS, GET_SELECTED_CREATOR } from '../constants/creators';
import { GET_EVENTS, GET_SELECTED_EVENT } from '../constants/events';
import { GET_SERIES, GET_SELECTED_SERIES } from '../constants/series';
import { SIGN_IN_ATTEMPT } from '../constants/auth';
import { REGISTRATION_ATTEMPT, GET_USER } from '../constants/user';
import { SET_APPLICATION_ERROR, CLEAR_API_ERRORS } from '../constants/display';

export const getCharacters = () => ({ type: GET_CHARACTERS });
export const getComics = () => ({ type: GET_COMICS });
export const getCreators = () => ({ type: GET_CREATORS });
export const getEvents = () => ({ type: GET_EVENTS });
export const getSeries = () => ({ type: GET_SERIES });
export const getUser = () => ({ type: GET_USER });
export const getSelectedCharacter = id => ({ type: GET_SELECTED_CHARACTER, id });
export const getSelectedComic = id => ({ type: GET_SELECTED_COMIC, id });
export const getSelectedCreator = id => ({ type: GET_SELECTED_CREATOR, id });
export const getSelectedEvent = id => ({ type: GET_SELECTED_EVENT, id });
export const getSelectedSeries = id => ({ type: GET_SELECTED_SERIES, id });
export const signIn = () => ({ type: SIGN_IN_ATTEMPT });
export const register = () => ({ type: REGISTRATION_ATTEMPT });
export const setApplicationError = error => ({ type: SET_APPLICATION_ERROR, error });
export const clearApiErrors = () => ({ type: CLEAR_API_ERRORS });

