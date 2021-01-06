// String Reversal
// Given a string of characters as input, write a function that returns
// it with the characters reversed

function stringReverse(input) {
  let result = "";
  for (let char of input) {
    result = char + result;
  }
  return result;
}

console.log("Reverse 'Hello World!': ", stringReverse("Hello World!"));

// Palindrome
// A palindrome is a word or phrase that reads the same backwards as forwards
// Write a function that checks for this

function isPalindrome(input) {
  const string = input.toLowerCase()
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] != " " && string[i] != "?" && string[i] != "." && string[i] != "!") {
      newString += string[i];
    }
  }
  result = "";
  for (let char of newString) {
    result = char + result;
  }
  if (newString === result) {
    return true;
  } else {
    return false;
  }
}

console.log("Is 'poop poop' a palindrome: ", isPalindrome("poop poop"));
console.log("Is 'Cigar? Toss it in a can. It is so tragic' a palindrome: ", 
  isPalindrome("Cigar? Toss it in a can. It is so tragic"));

// Integer Reversal
// Given an integer, reverse the order of the digits

function intReverse(input) {
  const string = input.toString();
  let reverseString = "";
  for (let char of string) {
    reverseString = char + reverseString;
  }
  return Math.sign(input) * parseInt(reverseString);
}

console.log("Reverse 1435: ", intReverse(1435));
console.log("Reverse -29101: ", intReverse(-29101));

// Fizz Buzz
// Given a number as an input, print out every integer from 1 to that number
// When the integer is divisible by 2 print out "Fizz"; when it's divisible by 3
// Print out "Buzz"; when it's divisible by both 2 and 3 print out "Fizz Buzz"

function fizzBuzz(input) {
  let upToInput = [];
  for (let i = 1; i <= input; i++) {
    upToInput.push(i);
  }
  if (input % 2 === 0 && input % 3 === 0) {
    upToInput.push("Fizz Buzz")
    return upToInput;
  } else if (input % 2 === 0) {
    upToInput.push("Fizz");
    return upToInput;
  } else if (input % 3 === 0) {
    upToInput.push("Buzz")
    return upToInput;
  }
}

console.log("fizzBuzz(12): ", fizzBuzz(12));
console.log("fizzBuzz(2): ", fizzBuzz(2));
console.log("fizzBuzz(3): ", fizzBuzz(3));

// Max Character
// Given a string of characters, return the 
// character that appears the most often

function max(input) {
  const characters = {};
  for (let char of input) {
    characters[char] = characters[char] + 1 || 1;
  }
  return characters;
}

console.log(max("puppy"));