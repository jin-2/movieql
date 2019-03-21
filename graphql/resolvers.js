import { getById, getMovies } from './db';

// query를 resolve
const resolver = {
    Query: {
        movies: () => getMovies(),
        movie: (_, {id}) => getById(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) => {}
    }
}

export default resolver;