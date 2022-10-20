/**
 * OMDB API
 */

const axios = require('axios');

const BASE_URL = "http://www.omdbapi.com/";
const API_KEY = "13384b9d";
const URL = `${BASE_URL}?apikey=${API_KEY}&`;

/**
 * Method untuk mengambil Object tentang detail film
 * berdasarkan parameter keyword.
 * @param {string} keyword 
 * @return Object
 */
const getMoviesObject = keyword => {
    return axios({
        method: "get",
        url: `${URL}s=${keyword}`
    })
        .then(res => res.data.Search)
        .catch(err => err.cause);
}

/**
 * Method untuk mengambil Object tentang detail film berdasarkan imdbID
 * @param {string} id 
 * @return Object
 */
const getMoviesDetailById = id => {
    return axios({
        method: "get",
        url: `${URL}i=${id}`
    })
        .then(res => res.data)
        .catch(err => err.cause);
}