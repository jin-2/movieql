import { getById, getMovies, addMovie, deleteMovie } from './db';

// query를 resolve
const resolver = {
    Query: {
        movies: () => getMovies(),
        movie: (_, {id}) => getById(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
}

export default resolver;