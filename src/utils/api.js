import axios from 'axios';

export const fetchCharacters = () => axios.get('http://192.168.99.100:3000/characters');
