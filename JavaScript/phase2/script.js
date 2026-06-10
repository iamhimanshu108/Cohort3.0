// # Part 1 — Functions Basics (1–20)

// ## Beginner Level

// 1. Create a function named `greet` that prints `"Hello World"`.
// 2. Create a function `add(a, b)` that returns the sum.
// 3. Write a function to calculate the square of a number.
// 4. Create a function that checks whether a number is even or odd.
// 5. Write a function that converts Celsius to Fahrenheit.
// 6. Create a function with default parameter `"Guest"`.
// 7. Write a function that returns the greater of two numbers.
// 8. Create a function to calculate area of rectangle.
// 9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
// 10. Create a function to reverse a string.


// function greet() {
//     console.log("Hello World");
// }

// greet();

// function add(a,b){
//     add = a+ b;
//     console.log(add)
// }

// add(10,20)


// function square(a){
//     square = a*a
//     console.log(square)
// }

// square(10)


// function number(a){
//     if(a%2 == 0){
//         console.log("Even")
//     } else {
//         console.log("Odd")
//     }
// }

// number(10)
// number(13)


// function celsiusToFahrenheit(celsius) {
//     let fahrenheit = (celsius * 9/5) + 32;
//     console.log(fahrenheit);
// }

// celsiusToFahrenheit(0);
// celsiusToFahrenheit(25);

// function greet(name = "Guest"){
//     console.log("Hello " + name);
// }

// greet();
// greet("Alice");

// function greater(a, b){
//     if( a>b){
//         console.log(a + " is greater than " + b);
//     }else if (b>a){
//         console.log(b + " is greater than " + a);
//     } else {
//         console.log(a + " and " + b + " are equal");
//     }
// }

// greater(10, 20);


// function area(l,w){
//     let area = l * w;
//     console.log(area);
// }

// area(5, 10);

// function ageCategory(age){
//     if(age >=18){
//         console.log("Adult");
//     }else {
//         console.log("Minor");
//     }
// }

// ageCategory(20);


// function reverseString(str){
//     let reversed = str.split("").reverse().join("");
//     console.log(reversed);
// }

// reverseString("Hello");
