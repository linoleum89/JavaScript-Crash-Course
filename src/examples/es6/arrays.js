//FOR OF

const letters = ['a', 'b', 'c'];

//ES5
for (var i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}

//ES6
for (let i of letters) {
    console.log(i);
}

letters.forEach((letter) => {
    console.log(letter);
});

const uppercaseLettersDictionary = letters.map((letter, index) => {
    return {
        letter: letter.toUpperCase(),
        index
    }
});


const filterLetters = letters.filter((letter, index) => {
    return letter !== 'a';
});

const numbers = [2, 4, 7, 9];
const sumArray = numbers.reduce((accumulator, currentValue) => {
    //2, 6, 13, 22
    console.log(accumulator + currentValue);
    return accumulator + currentValue;
}, 10);