// query를 resolve
const sujin = {
    name: "sujin",
    age: 99,
    gender: "female"
}

const resolver = {
    Query: {
        person: ()=> sujin
    }
}

export default resolver;