const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {d: 4, e: 5}

function addLocation(obj) {
    const clonedObj = { 
        ...obj, 
        location: 'Malmö'
    }

    return clonedObj;
}

console.log(addLocation(obj1));
console.log(obj1);
console.log(addLocation(obj2));
console.log(obj2);