const h1 = document.querySelector('h1');

const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}

function elementName({first, last}) {
    h1.innerText = `${first} ${last}`;
}

elementName(person);