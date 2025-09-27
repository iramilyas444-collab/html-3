// 1. Takes the input from the user (a number) and check if it is positive or negative

let num = +prompt("Enter a number:");
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
//  2. Takes the input from the user (a number) and check if it is even or odd.

let num = +prompt("Enter a number:");
if (num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
//  3. Takes the input from the user (age) and check if they are eligible to vote (age ≥ 18).

let age = +prompt("Enter your age:");
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

//  4. Takes the input from the user (a word) and check if it equals 'hello'.

let word = prompt("Enter a word:");
if (word == "hello") {
  console.log("Word is hello");
} else {
  console.log("Word is not hello");
}

//  5. Takes the input from the user (a number) and check if it is divisible by 5.

let num = +prompt("Enter a number:");
if (num % 5 == 0) {
  console.log("Divisible by 5");
} else {
  console.log("Not divisible by 5");
}


//  6. Takes the input from the user (a number) and check if it is greater than 100.

let num = +prompt("Enter a number:");
if (num > 100) {
  console.log("Greater than 100");
} else {
  console.log("Not greater than 100");
}

//  7. Takes the input from the user (gender) and print 'Male' or 'Female'.

let gender = prompt("Enter gender (male/female):");
if (gender == "male") {
  console.log("Male");
} else if (gender == "female") {
  console.log("Female");
} else {
  console.log("Invalid input");
}

//  8. Takes the input from the user (a number) and check if it is between 1 and 10.

let num = +prompt("Enter a number:");
if (num >= 1 && num <= 10) {
  console.log("Between 1 and 10");
} else {
  console.log("Not between 1 and 10");
}

//  9. Takes the input from the user (a character) and check if it is a vowel or consonant.

let ch = prompt("Enter a letter:");
if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

//  10. Takes the input from the user (two numbers) and check if they are equal or not equal

let a = +prompt("Enter first number:");
let b = +prompt("Enter second number:");
if (a == b) {
  console.log("Equal");
} else {
  console.log("Not equal");
}

//  Takes the input from the user (two numbers) and print the largest.

let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");

if (num1 > num2) {
  console.log("Largest number is: " + num1);
} else if (num2 > num1) {
  console.log("Largest number is: " + num2);
} else {
  console.log("Both numbers are equal.");
}

//  12. Takes the input from the user (three numbers) and print the largest.

let a = +prompt("Enter first number:");
let b = +prompt("Enter second number:");
let c = +prompt("Enter third number:");

if (a >= b && a >= c) {
  console.log("Largest number is: " + a);
} else if (b >= a && b >= c) {
  console.log("Largest number is: " + b);
} else {
  console.log("Largest number is: " + c);
}

//  13. Takes the input from the user (a year) and check if it is a leap year.
let year = +prompt("Enter a year:");

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a Leap Year.");
} else {
  console.log(year + " is NOT a Leap Year.");
}

//  14. Takes the input from the user (a number) and check if it is a multiple of 3 and 7.

let num = +prompt("Enter a number:");

if (num % 3 === 0 && num % 7 === 0) {
  console.log("The number is a multiple of both 3 and 7.");
} else {
  console.log("The number is NOT a multiple of both 3 and 7.");
}

//  15. Takes the input from the user (marks) and check if they passed (marks ≥ 40) or failed.
let marks = +prompt("Enter your marks:");

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

//  16. Takes the input from the user (a number) and check if it is within 50–100.

let num = +prompt("Enter a number:");

if (num >= 50 && num <= 100) {
  console.log("The number is within the range 50–100.");
} else {
  console.log("The number is NOT within the range 50–100.");
}

//  17. Takes the input from the user (hour in 0–23) and print 'Good Morning' if < 12, else 'Good
//  Evening'.
let hour = +prompt("Enter the hour (0-23):");

if (hour < 12) {
  console.log("Good Morning");
} else {
  console.log("Good Evening");
}


//  18. Takes the input from the user (a string) and check if its length is greater than 5.
let text = prompt("Enter a string:");

if (text.length > 5) {
  console.log("The string length is greater than 5.");
} else {
  console.log("The string length is NOT greater than 5.");
}

//  19. Takes the input from the user (age) and print if they are child (0–12), teenager (13–19), or adult
//  (20+).

let age = +prompt("Enter your age:");

if (age >= 0 && age <= 12) {
  console.log("Child");
} else if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else if (age >= 20) {
  console.log("Adult");
} else {
  console.log("Invalid age");
}

//  20. Takes the input from the user (a number) and check if it is positive, negative, or zero

let num = +prompt("Enter a number:");

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
