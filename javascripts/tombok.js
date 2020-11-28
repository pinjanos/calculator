const numericArr = [2334, 434, 576567, 22, 45];
// for (let i = 0; i < numericArr.length; i += 1) {
//     console.log(numericArr[i]);

// }

// numericArr.forEach(function (item) {
//     console.log(item);
// });
numericArr.forEach(item => console.log(item));
const exponentArr = numericArr.map(item => item ** 2);
console.log(exponentArr);
const eventArr = numericArr.filter(item => item % 2 === 0);
console.log(eventArr);
const sumOfArr = numericArr.reduce((prevoiusValue, currentValue) => prevoiusValue + currentValue);
console.log(sumOfArr);

// Adott az alábbi objektum:

const user = {
    firstName: 'John',
    lastName: 'Doe'
};

// Mentsd el külön lastName, firstName, és job változókba a fenti objektum property-jeit!
// Ha valamelyik nincs megadva, akkor az érték legyen a “unknown” string!

// const { firstName = "unknown", lastName = "unknown", job = "unknown" } = user;
// console.log(firstName, lastName, job);



// Adott az alábbi objektum:

// const user = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// Ments el külön l, f, és j változókba a fenti objektum lastName, firstName, és job property-jeit! Ha valamelyik nincs megadva, akkor az érték legyen a “unknown” string!

const { firstName: f = "unknown", lastName: l = "unknown", job: j = "unknown" } = user;
console.log(f, l, j);

// Ments el külön, tesszőleges nevű változókba az alábbi tömb első, harmadik, és ötödik indexű elemét!

const names = ['John', 'Jane', 'Judith', 'Jennefer', 'Jeremiah', 'Johnny'];

const [, első, , harmadik, , ötödik] = names;
console.log(első, harmadik, ötödik );


