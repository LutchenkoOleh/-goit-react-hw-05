import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const SEARCH_URL = `${BASE_URL}/search/movie?include_adult=false&language=en-US&page=1`;
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTBlMTk4NGUwY2QzOWZhM2JlYWRkMzVmMWJjYWViMCIsIm5iZiI6MTcyNjY3NzA1NC4zMjUwMzMsInN1YiI6IjY2ZTg2MTFiMDUwZjE0ZTRmY2QwMTc5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.otoSqUnvVYbW1dJApz223WsOR9QbATN_GzcH7mVGLA";
const API_KEY = "de0e1984e0cd39fa3beadd35f1bcaeb0";

export const getMovies = async (query) => {
  try {
    const response = await axios.get(SEARCH_URL, {
      params: {
        query,
        api_key: API_KEY
      },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies: ", error);
    throw error;
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
      params: {
        api_key: API_KEY
      },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies: ", error);
    throw error;
  }
};

export const getMovieById = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY
      },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details: ", error);
    throw error;
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY
      },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching movie cast: ", error);
    throw error;
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY
      },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie reviews: ", error);
    throw error;
  }
};