const zoo = {
    animal: 'Lion',
    name: 'Simba',
    continent: 'Africa'
}

function reverseObject(obj) {
    const reversedObj = {};
    for (let key in obj) {
        reversedObj[obj[key]] = key;
    }
    return reversedObj;
  }
  
console.log(reverseObject(zoo));