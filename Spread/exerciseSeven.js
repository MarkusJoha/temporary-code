const arr1 = ['fre', 'lör', 'sön'];
const arr2 = ['mån', 'tis'];
const arr3 = ['ons', 'tors'];
const arr4 = [...arr2, ...arr3, ...arr1];

console.log(arr4);