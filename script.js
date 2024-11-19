 // Push()
/*let arr = [1,2,3,4,5,6]
 let newArr = arr.push("seven")
 arr.push["seven"]
 console.log(arr)*/

 // pop() :-  
/* let arr = [1,2,3,4,5,6]   
 arr.pop()
  console.log(arr) */

 // shift()
/* let arr = [1,2,3,4,5,6]
 arr.shift()
 console.log(arr) */

 // unshift()
 /* let arr = [1,2,3,4,5,6]
 arr.unshift("zero")
 console.log(arr) */

 // includes()
 /* let arr = [1,2,3,4,5,6]
 console.log(arr.includes(3)) */

 // toString()
 /* let arr = [1,2,3,4,5,6]
let str = arr.toString()
console.log(typeof(str))
 console.log(arr.toString()) */

// reverse ()

 /* let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];
 let reversedLanguages = [languages].reverse();
 console.log(reversedLanguages); // Output: ["Lua", "Java", "C++", "Python", "JavaScript"]
 console.log(languages); // Output: ["JavaScript", "Python", "C++", "Java", "Lua"] */

 // join()
 /*
 let arr = [1,2,3,4,5,6]
let str = arr.toString()
console.log(typeof(str))
 console.log(arr.toString())*/
 
// concat 
/* const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3); */

//flat 
/*
const numbers = [['1', '2'], ['3', '4',
    ['5', ['6'], '7']]];
const flatNumbers = numbers.flat(Infinity);
console.log(flatNumbers) */

// slice 
/* 
let arr = [23, 56, 87, 32, 75, 13];
let new_arr = arr.slice(0,4);
console.log(arr);
console.log(new_arr);
*/

//splice
/* let fruits = ["Banana", "Orange", "Apple", "Mango"];
let removed = fruits.splice(2, 2);
console.log(fruits); 
console.log(removed) 

Removing Elements:

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let removed = fruits.splice(2, 2);
console.log(fruits); // Output: ["Banana", "Orange"]
console.log(removed); // Output: ["Apple", "Mango"]

Adding Elements:

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); // Output: ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]



Replacing Elements:

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits); // Output: ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]
*/


//sort
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
*/

//fill 
/*
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4);
console.log(fruits);
*/

//filter 
/*
const ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}
const adults = ages.filter(checkAdult);
console.log(adults);
*/


//	every() 
/*
 const numbers = [45, 4, 9, 16, 25];
const allOver18 = numbers.every(function(value) {
  return value > 18;
});
console.log(allOver18); // Output: false
*/

//	map() 
/*
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
*/

//	forEach() 
/*
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(function(item) {
  sum += item;
});
console.log(sum); // Output: 125
*/
//reduce() 
/*
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)  */
