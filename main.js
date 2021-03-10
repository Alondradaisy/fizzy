/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

let i = 0;
for (i = 0; i <= 20; i++) {
  if (i % 3 === 0) {
   console.log("Fizz"); //meaning if input number is divisible by 3 return Fizz
  } else if (i % 5 === 0) {
    console.log("Buzz");
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz"); 
  } else {
    console.log(i); // if the inputted number is not divisible by either number, return the number itself
  }
}







/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
