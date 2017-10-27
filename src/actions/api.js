import { GET_CHARACTERS, GET_SELECTED_CHARACTER } from '../constants/characters';
import { GET_COMICS } from '../constants/comics';
import { GET_CREATORS } from '../constants/creators';
import { GET_EVENTS } from '../constants/events';

export const getCharacters = () => ({ type: GET_CHARACTERS });
export const getComics = () => ({ type: GET_COMICS });
export const getCreators = () => ({ type: GET_CREATORS });
export const getEvents = () => ({ type: GET_EVENTS });
export const getSelectedCharacter = id => ({ type: GET_SELECTED_CHARACTER, id });