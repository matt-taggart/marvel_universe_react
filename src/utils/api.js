import axios from 'axios';

export const fetchCharacters = () => axios.get('http://localhost:3000/characters');
export const fetchComics = () => axios.get('http://localhost:3000/comics');
