//Map -Create a new array by doing something with each item in an array.

/*
USING MAPS:
function double(x) {
  return x * 2;
}

const newNumbers = numbers.map(double); 
*/

/*
USING FOR EACH:
var newNumbers = [];

function double(x) {
  newNumbers.push(x * 2);
}

numbers.forEach(double);

console.log(newNumbers);
*/

/*
USING FOR EACH
Simpler version: 

var newNumbers = [];

numbers.forEach(function (x){
newNumbers.push(x * 2);
}); 
*/

//Filter - Create a new array by keeping the items that return true.

/*
USING FILTER

const newNumbers = numbers.filter(function (num) {
  return num > 10;
});

console.log(newNumbers);
*/

/*
USING FOR EACH

var newNumbers = [];

numbers.forEach(function (x) {
  if (x > 10) {
    newNumbers.push(x);
  }
});

console.log(newNumbers);
*/

//Reduce - Accumulate a value by doing something to each item in an array.

/*
USING REDUCE

var newNumber = numbers.reduce(function (accumolator, currentNumber) {
  console.log(accumolator);
  console.log(currentNumber);
  return accumolator + currentNumber;
});

console.log(newNumber);
*/

/*
USING FOR EACH

var newNumber = 0;

numbers.forEach(function (currentNumber) {
  newNumber += currentNumber;
});

console.log(newNumber);
*/

//Find - find the first item that matches from an array.
/*
USING FIND

var newNumber = numbers.find(function (num) {
  return num > 10;
});

console.log(newNumber);
*/

//FindIndex - find the index of the first item that matches.
/* 
USING FINDINDEX

var numbers = [3, 56, 2, 48, 5];

var newNumber = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(newNumber);
*/

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);
