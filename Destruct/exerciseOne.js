const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}

function logObj({twitter, company}) {
    console.log(company, twitter);

}

logObj(person);