
// ARRAY
// Q1 fIND THE PRICES GREATER THAN 25

let prices = [10, 20, 30, 40, 50,100,2000,300,522,545,2562,];

// for(let i = 0; i < prices.length; i++){
//     if(prices[i] > 25){
//         console.log(prices[i]);
//     }
// }


// let premiumarr= prices.filter((prices) => prices >300)
// console.log(premiumarr)

// Q2   FIND average

let marks = [80,90,70,85,95];

// let sum =0;

// for(let i = 0; i < marks.length; i++){
//     sum += marks[i];
// }

// let average = sum / marks.length;

// console.log(average);


// let total =marks.reduce((acc,currentValue) =>{
//     return acc+currentValue
// },0)

// console.log(total)

// const average= total/marks.length

// console.log(average)


// Q3 Most Frequent Number

// let number = [1,2,3,2,4,2,5,1,1,1];

// let count = {};
// for (let i = 0; i < number.length; i++) {
//     let num = number[i];
//     if (count[num]) {
//         count[num]++;   // increase count if already exists
//     } else {
//         count[num] = 1; // initialize count if first time
//     }
// }

// console.log(count);



// q1;  update user age;

// let  user ={
//     name: "Ritik",
//     age: 20
// }

// console.log(user.age)

// user.age = 21

// console.log(user.age)

// Question 5 (Moderate) — Print User Information

// let user= {
// name:"Ritik",
// age:20,
// city:"Bhopal"
// };

// for (const [key, value] of Object.entries(user)){
//     console.log(key,value)
// }


//Question 6 (Hard) — Highest Paid Employee
// let employees= {
//     aman:25000,
//     ritik:50000,
//     priya:45000
// };
//Find the employee with the highest salary.


//Question 10 (Easy) — Find Adult Users
let users= [
{ name:"Ritik", age:20 },
{ name:"Aman", age:16 },
{ name:"Priya", age:25 }
];

function adult(users){
    return users.filter((user) =>user.age >=18)

}

console.log(adult(users))


//Question 11 (Moderate) — Shopping Cart Total
let cart= [
{ name:"Mouse", price:500, qty:2 },
{ name:"Keyboard", price:1000, qty:1 },
{ name:"Monitor", price:10000, qty:1 }
];

function total(cart){
    return cart.reduce((acc,currentItem) =>{
        return acc + currentItem.price * currentItem.qty
    },0)
}


console.log(total(cart))

