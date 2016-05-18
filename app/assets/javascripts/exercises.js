// // Exercise #1:

// Do the NASA countdown through the console. That is, the console should say:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// BLASTOFF!

// Hint: Use a for loop!

for (var i = 10; i > 0; i--) {
  console.log(i);
}
console.log("BLASTOFF")

// // Exercise #2:

var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// Write some code that prints all the numbers in the 'numbers' array to the console.

// Hint: Use a for loop!

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// // Exercise #3:

// Write code that finds the average of all the numbers in the 'numbers' array.
// Hint: Use a for loop!
var total = 0;
var average;
for (var i = 0; i < numbers.length; i++) {
  total = total + numbers[i] ;
}
average = total/numbers.length;
console.log(average);

// // Exercise #4:

// Implement FizzBuzz in JavaScript. Write a program that prints the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

// Hint: See other hints!

for (var i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log ("Buzz");
  } else {
    console.log(i);
  } }

// // Exercise #5:

// Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this. (NOTE: prompt will return a string, and you may need to "cast" it into a number.)
// For example:
// var guess = prompt("Guess a number");

var randomNumber = Math.floor((Math.random() * 10) + 1);
console.log("Random Number is " + randomNumber);
for (var i = 0; i < 10; i++) {
  var guess = prompt("Guess a number");
  var guessNumber = parseInt(guess);

  if (guessNumber === randomNumber) {
    console.log("Got it right!");
    break
  } else if (guessNumber < randomNumber) {
    console.log("Too low");
  } else if (guessNumber > randomNumber) {
    console.log("Too high")
  }
}

var answer = 45;
do {
  var guess = parseInt(prompt("Guess a number"));
  if (guess > answer) {
    console.log("Guess lower!");
  } else if (guess < answer) {
    console.log("Guess higher!");
  } else {
    console.log("You've won!");
  }
} while (guess !== answer)

// // Exercise #6:

// Create a function that accepts two numbers as parameters and returns their sum.

function sumNumbers(a,b) {
  var sum = a + b;
  return sum;
}

sumNumbers(1,2);

// // Exercise #7:

// Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #3, but wrap that code in a function and demonstrate its usage.)
function averageArray(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  var average = total/array.length;
  
  return average;
}
var array = [5, 23, 98, 234, 1, 0, 3, 177];
averageArray(array);

// // Exercise #8:

// Create an object that represents a particular book, having attributes of title, author, isbn, pages, and year of publication.

function Book(title, author, isbn, pages, year) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.pages = pages;
  this.year = year;
  this.printMessage = function () {
    return "Title is: " + this.title + ", " + "Author is: " + this.author + ", " + "ISBN is: " + this.isbn + ", " + "Pages is: " + this.pages + ", " + "Year is: " + this.year;
  };
}

var book = new Book("Book of Titles", "Kylie Le", 12345, 99, 1939);
console.log(book);
console.log(book.author);
console.log(book.pages);
console.log(book.printMessage);
console.log(book.printMessage());

// // Exercise #9:

// Add a function to the above book object that console.logs out all the above information 


// // Extra exercises can be found here: http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html 


