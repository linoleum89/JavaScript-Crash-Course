//ES5
const NUMBER_OF_STUDENTS = 15;
const myString1 = 'Hey there!';
const myString2 = 'this is React School';
const myString3 = 'number of students is:';

let message = myString1 + ', ' + myString2 + ', ' + myString3 + ' ' + NUMBER_OF_STUDENTS;

//ES6
message = `${myString1}, ${myString2}, ${myString3} ${NUMBER_OF_STUDENTS * 2}`

console.log(message);