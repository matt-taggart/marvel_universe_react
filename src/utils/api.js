import axios from 'axios';

axios.interceptors.response.use(() => {
}, error => Promise.reject(error.response.data));

export const fetchCharacters = () => axios.get('http://192.168.99.100:3000/characters');
export const fetchComics = () => axios.get('http://192.168.99.100:3000/comics');
export const fetchCreators = () => axios.get('http://192.168.99.100:3000/creators');
export const fetchEvents = () => axios.get('http://192.168.99.100:3000/events');
export const fetchSelectedCharacter = id => () => axios.get(`http://192.168.99.100:3000/characters/${id}`);
export const signIn = body => axios.post('http://192.168.99.100:3000/login', { ...body });
