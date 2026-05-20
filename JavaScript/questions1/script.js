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