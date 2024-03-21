const person1 = {
    first: 'Anna',
    last: 'Anka',
    location: 'Malmö'
}
const person2 = {
    first: 'Nick',
    last: 'Cage',
    location: 'Los Angeles'
}

function nameSwap(person1, person2) {
    const person3 = {
        first: person1.first,
        last: person2.last
    }

    return person3
}

console.log(nameSwap(person1, person2));