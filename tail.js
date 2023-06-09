const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let last = [];
  for (let i = 1; i < arr.length; i++) {
    last.push(arr[i]);
  } return last;
};

module.exports = tail;

/*
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!*/