//Array methods
//Method 1) concat() this method joins two or more arrays, and returns a copy of the joined arrays.
let arr = ["Tokyo","Rio"];
let arr2 = ["character 1", "character 2"];
console.log(arr);
console.log(arr.concat(arr2));

//Method 2)copyWithin() this method copies array elements within the array, to and from specified positions 
var fruits = ["Banana", "Orange", "Apples", "Mango", "Kiwi", "Papaya"];
console.log(fruits);
console.log(fruits.copyWithin(2,0,2));

//Method 3)entries() returns a key/value pair array iteration object
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var f = fruits.entries();

//Methon 4)every() this method checks if all elements in an array pass a test.
var marks=[50,40,45,37,20];    
function check(value)  
{  
  return value>30;  //return false, as marks[4]=20  
}  
  
document.writeln(marks.every(check));

//Method 5)fill() this method fills the elements with a static vale.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");

//method 6)filter() this method creates a new array with every element in an array that pass a test
var ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}

//Method 7)find() this method returns the value of the first element in an array that pass a test.
var ages = [3, 10, 18, 20];
function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAdult);
}

//Method 8)findIndex() this method returns the index of the first element in an array that pass a test
var ages = [3, 10, 18, 20];
function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.findIndex(checkAdult);
}

//Method 9)forEach() this method calls a function for each array element.
var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);
function myFunction(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}

//Method 10)from() this method creates an array from an object.
var myArr = Array.from("ABCDEFG");

//Method 11)includes() this method checks if an array contains the specified element.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Mango");

//Method 12)indexOf() this method searches the array for an element returns its position.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");

//Method 13)isArray() this method checks whether an object is an array.
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var x = document.getElementById("demo");
  x.innerHTML = Array.isArray(fruits);
}

//Method 14)join() this method joins all elements of an array into a string.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();

//Method 15)keys() this method returns a Array Iteration Object, containing the keys of the original array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fk = fruits.keys();

for (x of fk) {
  document.getElementById("demo").innerHTML += x + "<br>";
}

//Method 16)lastIndexOf()	this method searches the array for an element, starting at the end, and returns its position.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");

//Method 17)map()	Creates a new array with the result of calling a function for each array element.
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
document.getElementById("demo").innerHTML = x;

//Method 18)pop()	Removes the last element of an array, and returns that element.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

//Method 19)push()	Adds new elements to the end of an array, and returns the new length.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

//Method 20)reduce()	Reduce the values of an array to a single value (going left-to-right).
var numbers = [175, 50, 25];
document.getElementById("demo").innerHTML = numbers.reduce(myFunc);
function myFunc(total, num) {
  return total - num;
}

//Method 21)reduceRight()	Reduce the values of an array to a single value (going right-to-left).
var numbers = [175, 50, 25];
document.getElementById("demo").innerHTML = numbers.reduceRight(myFunc);
function myFunc(total, num) {
  return total - num;
}

//Method 22)reverse()	Reverses the order of the elements in an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();

//Method 23)shift()	Removes the first element of an array, and returns that element.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

//Method 24)slice()	Selects a part of an array, and returns the new array.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

//Method 25)some()	Checks if any of the elements in an array pass a test.
var ages = [3, 10, 18, 20];
function checkAdult(age) {
  return age >= 18;
}
function myFunction() {
  document.getElementById("demo").innerHTML = ages.some(checkAdult);
}

//Method 26)sort()	Sorts the elements of an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

//Method 27)splice()	Adds/Removes elements from an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

//Method 28)toString()	Converts an array to a string, and returns the result.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.toString();

//Method 29)unshift()	Adds new elements to the beginning of an array, and returns the new length.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");

//Method 30)valueOf()	Returns the primitive value of an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var v = fruits.valueOf();