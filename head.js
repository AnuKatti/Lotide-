const assertEqual = require("./assertEqual");

const head = function(arr) {
  return arr[0];
};

module.exports = head;

/*
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 12);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head([])); */
