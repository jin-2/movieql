import people from './db';

// query를 resolve
const resolver = {
    Query: {
        people: () => people,
        // person: () => person
    }
}

export default resolver;