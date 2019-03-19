const people = [
    {
        id: 1,
        name: "sujin",
        age: 99,
        gender: "female"
    },
    {
        id: 2,
        name: "nico",
        age: 24,
        gender: "male"
    },
    {
        id: 3,
        name: "jinwon",
        age: 34,
        gender: "male"
    },
    {
        id: 4,
        name: "enuju",
        age: 12,
        gender: "male"
    },
    {
        id: 5,
        name: "yeenhi",
        age: 22,
        gender: "female"
    },
    {
        id: 6,
        name: "hunguk",
        age: 78,
        gender: "female"
    },
    {
        id: 7,
        name: "sangik",
        age: 33,
        gender: "male"
    },
    {
        id: 8,
        name: "eunbi",
        age: 89,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(
        person => String(person.id) === String(id)
    );
    return filteredPeople[0];
}

export default people;