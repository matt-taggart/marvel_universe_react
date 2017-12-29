import axios from 'axios';

axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response.data),
);

axios.defaults.withCredentials = true;

const baseUrl = 'http://192.168.99.100:3000';

export const fetchCharacters = () => axios.get(`${baseUrl}/characters`);
export const fetchComics = () => axios.get(`${baseUrl}/comics`);
export const fetchCreators = () => axios.get(`${baseUrl}/creators`);
export const fetchEvents = () => axios.get(`${baseUrl}/events`);
export const fetchSeries = () => axios.get(`${baseUrl}/series`);
export const fetchUser = () => axios.get(`${baseUrl}/user`);
export const fetchSelectedCharacter = id => () => axios.get(`${baseUrl}/characters/${id}`);
export const fetchSelectedComic = id => () => axios.get(`${baseUrl}/comics/${id}`);
export const fetchSelectedCreator = id => () => axios.get(`${baseUrl}/creators/${id}`);
export const fetchSelectedEvent = id => () => axios.get(`${baseUrl}/events/${id}`);
export const fetchSelectedSeries = id => () => axios.get(`${baseUrl}/series/${id}`);
export const saveResource = ({ resourceType, id, name }) => axios.post(`${baseUrl}/user/${resourceType}/${id}`, { name } );
export const signIn = credentials => axios.post(`${baseUrl}/login`, { ...credentials });
export const register = payload => axios.post(`${baseUrl}/user`,  { ...payload });
export const logout = () => axios.delete(`${baseUrl}/logout`);
export const searchCharacters = searchTerm => axios.get(`${baseUrl}/characters${searchTerm && `?nameStartsWith=${searchTerm}`}`);
export const searchComics = searchTerm => axios.get(`${baseUrl}/comics${searchTerm && `?titleStartsWith=${searchTerm}`}`);
export const searchCreators = searchTerm => axios.get(`${baseUrl}/creators${searchTerm && `?nameStartsWith=${searchTerm}`}`);
export const searchEvents = searchTerm => axios.get(`${baseUrl}/events${searchTerm && `?nameStartsWith=${searchTerm}`}`);
export const searchSeries = searchTerm => axios.get(`${baseUrl}/series${searchTerm && `?titleStartsWith=${searchTerm}`}`);
