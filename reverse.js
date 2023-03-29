/*
// Write a program that takes any number of command line arguments, all strings, and reverses them
// before outputting them one at a time to the console.
*/

function reverseStr(inputStr) {
    word = "";
  
    for (var i = inputStr.length - 1; i >= 0; i--) {
      word += inputStr[i];
    }
    console.log(word);
  }
  
  var args = process.argv.slice(2);
  
  for (var iter = 0; iter < args.length; iter++) {
    reverseStr(args[iter]);
  }