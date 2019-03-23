import { getMovies } from "./db";

// query를 resolve
const resolver = {
  Query: {
    // "_": variable name으로 사용하지 않아서 "_" 언더바를 사용함.
    movies: (_, {limit, rating}) => getMovies(limit, rating)
  }
};

export default resolver;