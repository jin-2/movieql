import people, { getById } from './db';

// query를 resolve
const resolver = {
    Query: {
        people: () => people,
        // person: () => getById()
        // person: (_, args) => {
        //     console.log(args);
        // }
        person: (_, {id}) => getById(id)
    }
}

export default resolver;