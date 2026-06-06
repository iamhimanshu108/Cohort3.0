// ## Console & Basics

// 1. Print `"Hello JavaScript"` in the console.
// 2. Print your name, age, and city using one `console.log()`.
// 3. Print a warning message using `console.warn()`.
// 4. Print an error message using `console.error()`.
// 5. Use `console.table()` to display an array of 5 numbers.


// console.log("Hello JavaScript");
// console.log("My name is John, I am 25 years old, and I live in New York.");
// console.warn("This is a warning message!");
// console.error("This is an error message!");
// console.table([10, 20, 30, 40, 50]);


// ## Variables

// 1. Create a variable called `studentName` and store your name in it.
// 2. Create a variable `age` and print it.
// 3. Create two variables and swap their values.
// 4. Create a constant variable for `PI` and print it.
// 5. Declare a variable without assigning a value and print it.
// 6. Create a variable `score` and increase it by 10.

// var studentName = "Himanshu";
// var age = 25;
// console.log(age);
// console.log(studentName);

// var a = 5;
// var b = 10;
// console.log("Before swapping: a =", a, "b =", b);           
// var temp = a; // Store the value of a in a temporary variable
// a = b;        // Assign the value of b to a
// b = temp;     // Assign the value of temp (original a) to b
// console.log("After swapping: a =", a, "b =", b);

// const PI = 3.14159;
// console.log(PI);

// var unassignedVariable;
// console.log(unassignedVariable); // This will print 'undefined'


// var score = 50; 
// score += 10; // This is equivalent to score = score + 10
// console.log(score); // This will print 60



// ## Data Types

// 1. Create variables of type string, number, boolean, null, and undefined.
// 2. Check the type of different variables using `typeof`.
// 3. Store your mobile number in a variable and check its type.
// 4. Create a variable with value `null` and check its type.
// 5. Create a bigint number and print it.

// var name = "Alice"; // String
// var age = 30;
// var isStudent = true; // Boolean
// var address = null; // Null
// var phoneNumber; // Undefined

// console.log(typeof name);   
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof address);
// console.log(typeof phoneNumber);


// var mobileNumber = 1234567890;
// console.log(typeof mobileNumber); // This will print 'number'

// var nullVariable = null;
// console.log(typeof nullVariable); // This will print 'object' (this is a known quirk in JavaScript)


// var bigIntNumber = 1234567890123456789012345678901234567890n; // Note the 'n' at the end
// console.log(bigIntNumber);
// console.log(typeof bigIntNumber); // This will print 'bigint'


// ## Type Conversion & Coercion

// 1. Convert the string `"50"` into a number.
// 2. Convert the number `100` into a string.
// 3. Convert `"true"` into a boolean.
// 4. Check the output of:
// - `"5" + 2`
// - `"5" - 2`
// - `true + 1`
// 1. Create a variable with value `"123abc"` and convert it into a number.
// 2. Use `parseInt()` on `"500px"`.

// var strNum = "50";
// var num = Number(strNum);
// console.log(num); // This will print 50

// var numValue = 100;
// var strValue = String(numValue);
// console.log(strValue); // This will print "100"

// var strBool = "true";
// var boolValue = (strBool === "true");
// console.log(boolValue); // This will print true
// console.log("5"+2);
// console.log("5"-2);
// console.log(true +1);

// var a = "123abc";
// var convertedNumber = Number(a);
// console.log(convertedNumber); // NaN

// var valueWithPx = "500px";
// var parsedNumber = parseInt(valueWithPx);
// console.log(parsedNumber); // 500



// ## Operators

// 1. Add two numbers and print the result.
// 2. Find the remainder when 25 is divided by 4.
// 3. Find the square of a number using exponent operator.
// 4. Increment a variable using `++`.
// 5. Decrement a variable using `-`.
// 6. Use `+=` operator to increase a variable by 20.
// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
// 8. Check if two values are strictly equal using `===`.
// 9. Compare `"10"` and `10` using both `==` and `===`.
// 10. Create two boolean variables and test `&&`, `||`, and `!`.

//  var  a =10;
//  var b =20;
//  console.log(a+b);

// var a = 25;
// var b = 4;
// var remainder = a % b;
// console.log(remainder); 

// var num = 5;
// var square = num ** 2;
// console.log(square); 

// var count = 10;
// count++;
// console.log(count);        

// var count = 10; 
// count--;
// console.log(count);


// var score = 50;
// score += 20; 
// console.log(score);

// var x = 10;
// var y = 20;
// console.log(x > y);  
// console.log(x < y);  
// console.log(x >= y); 
// console.log(x <= y);


// var a = 10;
// var b = 10;
// console.log(a === b); // true

// console.log("10" == 10);  // true (type coercion)    
// console.log("10" === 10); // false (strict equality, no type coercion)

// var bool1 = true;
// var bool2 = false;
// console.log(bool1 && bool2); // false
// console.log(bool1 || bool2); // true
// console.log(!bool1); // false
// console.log(!bool2); // true


// ## Strings

// 1. Create a string and print its length.
// 2. Convert a string into uppercase.
// 3. Convert a string into lowercase.
// 4. Check if a string includes the word `"JavaScript"`.
// 5. Extract the word `"World"` from `"Hello World"`.
// 6. Replace `"apple"` with `"mango"` in a sentence.
// 7. Split `"HTML,CSS,JS"` into an array.
// 8. Remove extra spaces from a string.
// 9. Repeat the word `"Hi"` 5 times.
// 10. Print the first character of a string.
// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`

// var str = "Hello JavaScript";
// console.log(str.length); // 16

// var str = "hello world";
// var upperStr = str.toUpperCase();
// console.log(upperStr); // "HELLO WORLD"

// var  str = "HELLO WORLD";
// var lowerStr = str.toLowerCase();
// console.log(lowerStr); // "hello world"

// var str = "I love JavaScript";
// console.log(str.includes("JavaScript")); // true 

// var str = "Hello World";
// var extractedWord = str.substring(6, 11);
// console.log(extractedWord); // "World"


// var sentence = "I have an apple.";
// var newSentence = sentence.replace("apple", "mango");
// console.log(newSentence); // "I have a mango."


// var csv = "HTML,CSS,JS";
// var languages = csv.split(",");
// console.log(languages); // ["HTML", "CSS", "JS"]

// var str = "   Hello World!   ";
// var trimmedStr = str.trim();
// console.log(trimmedStr); // "Hello World!"


// var word = "Hi";
// var repeatedWord = word.repeat(5);
// console.log(repeatedWord); // "HiHiHiHiHi"


// var str = "JavaScript";
// console.log(str.charAt(0)); // "J"


// var name = "Aman";
// var age = 20;
// var message = `My name is ${name} and I am ${age} years old.`;
// console.log(message); // "My name is Aman and I am 20 years old."


// ## Numbers & Math

// 1. Round `4.7` using `Math.round()`.
// 2. Find the square root of 81.
// 3. Find the maximum number from `10, 20, 5, 99`.
// 4. Generate a random number between 1 and 10.
// 5. Convert `"99.99"` into an integer.
// 6. Check whether `25` is an integer or not.
// 7. Use `toFixed(2)` on `3.141592`.

// console.log(Math.round(4.7)); // 5

// console.log(Math.sqrt(81)); // 9 

// console.log(Math.max(10, 20, 5, 99)); // 99

// var randomNum = Math.floor(Math.random() * 10) + 1;
// console.log(randomNum); // Random number between 1 and 10

// var strNum = "99.99";
// var intNum = parseInt(strNum);
// console.log(intNum); // 99

// console.log(Number.isInteger(25)); // true
// console.log(Number.isInteger(25.5)); // false


// var pi = 3.141592;
// console.log(pi.toFixed(2)); // "3.14"



// ## Conditionals

// 1. Check whether a number is positive or negative.
// 2. Check whether a number is even or odd.
// 3. Check whether a person is eligible to vote.
// 4. Find the largest among two numbers.
// 5. Find the largest among three numbers.
// 6. Check whether a year is a leap year.
// 7. Check whether a number is divisible by both 3 and 5.
// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail
// 1. Check whether a character is a vowel or consonant.
// 2. Create a calculator using `switch` statement.
// 3. Print the day name based on a number (1–7).
// 4. Check whether a username is `"admin"` and password is `"1234"`.

//  var num = -5;
//     if (num > 0) {
//         console.log("The number is positive."); 
//     } else if (num < 0) {  
//         console.log("The number is negative.");
//     } else {
//         console.log("The number is zero.");
//     }

// ## Truthy & Falsy

// 1. Check whether an empty string is truthy or falsy.
// 2. Check whether `0` is truthy or falsy.
// 3. Check whether `[]` is truthy or falsy.
// 4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.


// var emptyString = "";
// console.log(Boolean(emptyString)); // false

// var zero = 0;
// console.log(Boolean(zero)); // false


// var emptyArray = [];
// console.log(Boolean(emptyArray)); // true

// var value = "Hello";
// if (value) {
//     console.log("Valid");
// } else {
//     console.log("Invalid");
// }


// ## Ternary Operator

// 1. Check whether a number is even or odd using ternary operator.
// 2. Check whether age is above 18 using ternary operator.
// 3. Find the greater number between two values using ternary operator.


// var num = 7; 
// var result = (num % 2 === 0) ? "Even" : "Odd";
// console.log(result); // "Odd"

// var age = 20;
// var eligibility = (age > 18) ? "Eligible to vote" : "Not eligible to vote";
// console.log(eligibility); // "Eligible to vote"

// var a = 10;
// var b = 20;
// var greater = (a > b) ? a : b;
// console.log(greater); // 20

// ## Mixed Practice Questions

// 1. Create a mini biodata program using variables and template literals.
// 2. Calculate the area of a rectangle.
// 3. Calculate the simple interest.
// 4. Convert temperature from Celsius to Fahrenheit.
// 5. Convert kilometers into meters.
// 6. Calculate total marks and percentage of 5 subjects.
// 7. Calculate electricity bill based on units consumed.
// 8. Create a username generator using first name and birth year.
// 9. Check whether a string starts with a specific letter.
// 10. Count the total characters in a sentence excluding spaces.


    // `var name = "John Doe"; `
    // var age = 30;
    // var city = "New York";
    // var biodata = `My name is ${name}, I am ${age} years old, and I live in ${city}.`;
    // console.log(biodata); // "My name is John Doe, I am 30 years old, and I live in New York."


// var length = 5;
// var width = 3;
// var area = length * width;
// console.log("Area of the rectangle:", area); // 15

// var pricipal = 1000;
// var rate = 5;
// var time = 2;
// var simpleInterest = (pricipal * rate * time) / 100;
// console.log("Simple Interest:", simpleInterest); // 100
 

// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32;
// console.log(`${celsius}°C is equal to ${fahrenheit}°F`); // "25°C is equal to 77°F"

// var kilometers = 5;
// var meters = kilometers * 1000;
// console.log(`${kilometers} kilometers is equal to ${meters} meters`); // "5 kilometers is equal to 5000 meters"

// var marks = [85, 90, 78, 92, 88];
// var totalMarks = marks.reduce((total, mark) => total + mark, 0);
// var percentage = (totalMarks / (marks.length * 100)) * 100;
// console.log("Total Marks:", totalMarks); // 433
// console.log("Percentage:", percentage.toFixed(2) + "%"); // "86.60%"

// var unitsConsumed = 150;
// var ratePerUnit = 0.5;
// var billAmount = unitsConsumed * ratePerUnit;
// console.log("Electricity Bill:", billAmount); // 75

// var firstName = "Alice";
// var birthYear = 1990;
// var username = `${firstName}${birthYear}`;
// console.log("Generated Username:", username); // "Alice1990" 
// var str = "Hello World";
// var startsWithH = str.startsWith("H");
// console.log(startsWithH); // true

// var sentence = "JavaScript is great";
// var charCount = sentence.replace(/\s/g, '').length;
// console.log("Total characters excluding spaces:", charCount); // 19


// ## Logical Thinking Questions

// 1. Take two numbers and print which one is greater.
// 2. Check whether a number lies between 10 and 50.
// 3. Check whether a password length is greater than 8.
// 4. Check if a person can drive:
// - age > 18
// - has license = true
// 1. Check whether a number is divisible by 2, 3, or both.
// 2. Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.
// 3. Find whether a number is a multiple of 10.
// 4. Create a simple discount calculator.
// 5. Check whether a product is in stock.
// 6. Calculate final bill after GST.


// var num1 = 10;
// var num2 = 20;
// if (num1 > num2) { 
//     console.log(`${num1} is greater than ${num2}`);
// }   else if (num2 > num1) { 
//     console.log(`${num2} is greater than ${num1}`);
// } else {
//     console.log("Both numbers are equal.");
// }

// var num = 25;
// if (num > 10 && num < 50) {
//     console.log(`${num} lies between 10 and 50.`);
// } else {
//     console.log(`${num} does not lie between 10 and 50.`);
// }     


// var password=   "mysecretpassword";
// if (password.length > 8) {
//     console.log("Password is strong.");
// } else {
//     console.log("Password is weak. It should be greater than 8 characters.");
// }
