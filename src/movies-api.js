import axios from "axios";

const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTBlMTk4NGUwY2QzOWZhM2JlYWRkMzVmMWJjYWViMCIsIm5iZiI6MTcyNjY3NzA1NC4zMjUwMzMsInN1YiI6IjY2ZTg2MTFiMDUwZjE0ZTRmY2QwMTc5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.otoSqUnvVYbW1dJApz223WsOR9QbATN_GzcH7mVGLA"


const options = {
  headers: {
    Authorization: ` Bearer ${token}`
  }
};

axios.get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));


// const key = "de0e1984e0cd39fa3beadd35f1bcaeb0"