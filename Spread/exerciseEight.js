const month1 = ['jan', 'feb'];
const month2 = ['mar', 'apr', 'maj'];
const month3 = ['sep', 'okt'];
const year = ['jun', 'jul', 'aug', 'nov', 'dec'];

year.splice(0, 0, month1[0], month1[1]);
year.splice(2, 0, month2[0], month2[1], month2[2]);
year.splice(8, 0, month3[0], month3[1]);

console.log(year);