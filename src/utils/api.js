import axios from 'axios';

axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response.data),
);

export const fetchCharacters = () => axios.get('http://192.168.99.100:3000/characters');
export const fetchComics = () => axios.get('http://192.168.99.100:3000/comics');
export const fetchCreators = () => axios.get('http://192.168.99.100:3000/creators');
export const fetchEvents = () => axios.get('http://192.168.99.100:3000/events');
export const fetchSelectedCharacter = id => () => axios.get(`http://192.168.99.100:3000/characters/${id}`);
export const fetchSelectedComic = id => () => axios.get(`http://192.168.99.100:3000/comics/${id}`);
export const fetchSelectedCreator = id => () => axios.get(`http://192.168.99.100:3000/creators/${id}`);
export const fetchSelectedEvent = id => () => axios.get(`http://192.168.99.100:3000/events/${id}`);
export const signIn = credentials => axios.post('http://192.168.99.100:3000/login', { ...credentials });
export const register = payload => axios.post('http://192.168.99.100:3000/users',  { ...payload });
