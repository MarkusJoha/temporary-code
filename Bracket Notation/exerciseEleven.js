const country = {
    name: 'Sweden',
    population: '9000000',
    capital: 'Malmö',
    weather: 'probably windy',
    age: 500,
}
const person = {
    firstName: 'Nicolas',
    lastName: 'Cage',
    location: 'Los Angeles',
    occupation: 'actor',
    age: 60,
    birthday: 'January 7',
    uncle: 'Francis Ford Coppola',
    bestMovie: 'The Unbearable Weight of Massive Talent'
}

function displayObject(obj, objName) {

    const objectHeader = document.createElement('h3');

    objectHeader.innerText = 'Object: ' + objName;

    document.body.appendChild(objectHeader);

    for (const key in obj) {
        const p = document.createElement('p');

        p.innerText= key + ": " + obj[key];

        document.body.append(p);
    }
}

displayObject(country, 'Country');
displayObject(person, 'Person');