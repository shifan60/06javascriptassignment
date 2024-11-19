       JavaScript
           Assignment 6

Qn. Write short notes on Array methods with code example ?
 1.	Write short notes on Array methods with code example


•   push() :- Adds one or more elements to the end of an array and returns the new length of the array.
~~~js 
let fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Orange"]
~~~
•	pop() :- Removes the last element from an array and returns that element.
~~~js
let fruits = ["Apple", "Banana", "Orange"];
let last = fruits.pop();
console.log(last); // "Orange"
console.log(fruits); // ["Apple", "Banana"]
~~~
•	shift() :- Removes the first element from an array and returns that element.
~~~js
let fruits = ["Apple", "Banana", "Orange"];
let first = fruits.shift();
console.log(first); // "Apple"
console.log(fruits); // ["Banana", "Orange"]
~~~
•	unshift() :- Adds one or more elements to the beginning of an array and returns the new length of the array.
~~~js
let fruits = ["Banana", "Orange"];
fruits.unshift("Apple");
console.log(fruits); // ["Apple", "Banana", "Orange"]
~~~
•	includes() :- The includes() method returns true if an array contains a specified value.The includes() method returns false if the value is not found.
~~~js

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // true
console.log(numbers.includes(6)); // false
~~~
•	toString() :- It converts an array into a string, with each element separated by a comma.
~~~js
 const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.toString();
console.log(result); // Output: "Banana,Orange,Apple,Mango"
~~~

•	reverse() :- It is used to reverse the order of elements in an array. This method modifies the original array and returns the reversed array.
~~~js
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]
~~~

•	join() :- It is used to concatenate all elements of an array into a single string, with an optional separator between each element. 
~~~js
const array = ['a', 'b', 'c'];
const str = array.join('-');
console.log(str); // Output: 'a-b-c'
~~~

•	concat() :-It is used to merge two or more arrays. This method does not change the existing arrays but returns a new array containing the combined elements.
~~~js
const array1 = ["a", "b", "c"];
const array2 = [1, 2, 3];
const combinedArray = array1.concat(array2);
console.log(combinedArray); // Output: ["a", "b", "c", 1, 2, 3]
~~~

•	flat() :-It is used to flatten nested arrays.
~~~js
const arr1 = [1, 2, [3, 4]];
const flatArr1 = arr1.flat();
console.log(flatArr1); // Output: [1, 2, 3, 4]
~~~

•	slice() :-It is used to create a shallow copy of a portion of an array into a new array object. It does not modify the original array.
~~~js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ["Orange", "Lemon"]
~~~

•	splice() :-It is used to add, remove, or replace elements in an array. It modifies the original array and returns an array containing the deleted elements, if any.

Removing Elements:
~~~js
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let removed = fruits.splice(2, 2);
console.log(fruits); // Output: ["Banana", "Orange"]
console.log(removed); // Output: ["Apple", "Mango"]
~~~ 

Adding Elements:
~~~js
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); // Output: ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
~~~


Replacing Elements:
~~~js
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits); // Output: ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]
~~~

•	sort() :-It is used to sort the elements of an array. By default, it sorts the elements as strings in alphabetical and ascending order.
~~~js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]
~~~

•	fill() :-It is used to fill all the elements of an array with a static value. 
~~~js
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4);
console.log(fruits); // Output: ["Banana", "Orange", "Kiwi", "Kiwi"]
~~~

•	filter() :-It is used to create a new array with all elements that pass a test implemented by a provided function. 
~~~js
const ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}
const adults = ages.filter(checkAdult);
console.log(adults); // Output: [32, 33, 40]
~~~

•	some() :-It is used to check if at least one element in an array passes a test implemented by a provided function. It returns true if any element passes the test, otherwise it returns false.
~~~js
const ages = [3, 10, 18, 20];
const isAdult = ages.some(age => age > 18);
console.log(isAdult); // Output: true
~~~

•	every() :- It is used to test whether all elements in an array pass a specified test function. It returns true if the function returns true for all elements, and false otherwise.
~~~js
 const numbers = [45, 4, 9, 16, 25];
const allOver18 = numbers.every(function(value) {
  return value > 18;
});
console.log(allOver18); // Output: false
~~~

•	map() :-It is used to create a new array by applying a function to each element of an existing array.

~~~js
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
~~~

•	forEach() :-It is used to execute a provided function once for each array element.
~~~js
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(function(item) {
  sum += item;
});
console.log(sum); // Output: 125
~~~

•	reduce() :- It is a powerful tool for transforming an array into a single value by iterating through its elements.

~~~js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
~~~

. indexof() :- It is used to find firt occurance of a specified value in an array . It returns the index of the value if found, and -1 if the value is not found 
~~~js
const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let index = fruits.indexOf("Apple", 3);
console.log(index); // Output: 4
~~~
~~~js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Pineapple");
console.log(index); // Output: -1
~~~

https://javascript-array-methods-quiz.netlify.app/
  

  ![ss1](/img.jpeg)
  


