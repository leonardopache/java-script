import axios from 'axios';

/** OMDB API configs */
const OMDB_API_KEY: string = (process.env.REACT_OMDB_API_KEY! as string) || '';
console.log(`OMDB API key: ${OMDB_API_KEY}`);
const movieApiBaseUrl = 'http://www.omdbapi.com';
export const movieApi = axios.create({
    baseURL: movieApiBaseUrl,
    params: {
        apikey: OMDB_API_KEY,
    },
});
