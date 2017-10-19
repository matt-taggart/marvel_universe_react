import axios from 'axios';

export const fetchCharacters = () => axios.get('http://192.168.99.100:3000/characters');
export const fetchComics = () => axios.get('http://192.168.99.100:3000/comics');
export const fetchCreators = () => axios.get('http://192.168.99.100:3000/creators');
