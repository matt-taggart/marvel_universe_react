import { GET_CHARACTERS, GET_SELECTED_CHARACTER, SEARCH_CHARACTERS } from '../constants/characters';
import { GET_COMICS, GET_SELECTED_COMIC, SEARCH_COMICS } from '../constants/comics';
import { GET_CREATORS, GET_SELECTED_CREATOR, SEARCH_CREATORS } from '../constants/creators';
import { GET_EVENTS, GET_SELECTED_EVENT, SEARCH_EVENTS } from '../constants/events';
import { GET_SERIES, GET_SELECTED_SERIES, SEARCH_SERIES } from '../constants/series';
import { SIGN_IN_ATTEMPT, LOGOUT } from '../constants/auth';
import { REGISTRATION_ATTEMPT, GET_USER, SAVE_RESOURCE } from '../constants/user';
import { SET_APPLICATION_ERROR, CLEAR_API_ERRORS } from '../constants/display';

export const getCharacters = offset => ({ type: GET_CHARACTERS, offset });
export const getComics = offset => ({ type: GET_COMICS, offset });
export const getCreators = offset => ({ type: GET_CREATORS, offset });
export const getEvents = offset => ({ type: GET_EVENTS, offset });
export const getSeries = offset => ({ type: GET_SERIES, offset });
export const getUser = () => ({ type: GET_USER });
export const getSelectedCharacter = id => ({ type: GET_SELECTED_CHARACTER, id });
export const getSelectedComic = id => ({ type: GET_SELECTED_COMIC, id });
export const getSelectedCreator = id => ({ type: GET_SELECTED_CREATOR, id });
export const getSelectedEvent = id => ({ type: GET_SELECTED_EVENT, id });
export const getSelectedSeries = id => ({ type: GET_SELECTED_SERIES, id });
export const saveResource = payload => ({ type: SAVE_RESOURCE, payload });
export const signIn = () => ({ type: SIGN_IN_ATTEMPT });
export const register = () => ({ type: REGISTRATION_ATTEMPT });
export const logout = () => ({ type: LOGOUT });
export const setApplicationError = error => ({ type: SET_APPLICATION_ERROR, error });
export const clearApiErrors = () => ({ type: CLEAR_API_ERRORS });
export const searchCharacters = e => ({ type: SEARCH_CHARACTERS, searchTerm: e.target.value });
export const searchComics = e => ({ type: SEARCH_COMICS, searchTerm: e.target.value });
export const searchCreators = e => ({ type: SEARCH_CREATORS, searchTerm: e.target.value });
export const searchEvents = e => ({ type: SEARCH_EVENTS, searchTerm: e.target.value });
export const searchSeries = e => ({ type: SEARCH_SERIES, searchTerm: e.target.value });
