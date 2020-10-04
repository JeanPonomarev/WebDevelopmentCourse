var people = [
    {
        name: "Ivan",
        lastName: "Ivanov",
        age: 25
    },
    {
        name: "Petr",
        lastName: "Petrov",
        age: 30
    },
    {
        name: "John",
        lastName: "Doe",
        age: 23
    },
    {
        name: "Adam",
        lastName: "Smith",
        age: 40
    },
    {
        name: "Roman",
        lastName: "Romanov",
        age: 31
    },
    {
        name: "Stephan",
        lastName: "Stephanov",
        age: 18
    },
    {
        name: "Jack",
        lastName: "Miller",
        age: 50
    },
    {
        name: "Anton",
        lastName: "Antonov",
        age: 27
    },
    {
        name: "Tom",
        lastName: "Thompson",
        age: 35
    },
    {
        name: "Vladimir",
        lastName: "Vladimirov",
        age: 29
    },
];

var averageAge = _.reduce(people, function (memo, person) {
    return memo + person.age;
}, 0) / people.length;

console.log("Average age: " + averageAge);

var filteredPeople = _.chain(people)
    .filter(function (person) {
        return person.age >= 20 && person.age <= 30;
    })
    .sortBy("age")
    .value();

console.log("Filtered and sorted people's list")
console.log(filteredPeople);

_.each(people, function (person) {
    _.extend(person, {fullName: person.lastName + " " + person.name});
});

console.log("People's list with new property \"fullName\"");
console.log(people);