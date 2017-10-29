import { GET_CHARACTERS, GET_SELECTED_CHARACTER } from '../constants/characters';
import { GET_COMICS } from '../constants/comics';
import { GET_CREATORS } from '../constants/creators';
import { GET_EVENTS } from '../constants/events';
import { SIGN_IN_ATTEMPT } from '../constants/auth';
import { REGISTRATION_ATTEMPT } from '../constants/users';

export const getCharacters = () => ({ type: GET_CHARACTERS });
export const getComics = () => ({ type: GET_COMICS });
export const getCreators = () => ({ type: GET_CREATORS });
export const getEvents = () => ({ type: GET_EVENTS });
export const getSelectedCharacter = id => ({ type: GET_SELECTED_CHARACTER, id });
export const signIn = () => ({ type: SIGN_IN_ATTEMPT });
export const register = () => ({ type: REGISTRATION_ATTEMPT });
