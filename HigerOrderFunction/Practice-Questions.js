// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// ##########################
// # Higher-Order Functions #
// ##########################


// Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it.
const addTwo = (num) => {
  return num * 2;
};


// To check if you've completed this function, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
// Create a function addS that accepts one input and adds an "s" to it
const addS = (word) => {
	  return word + 's';
};

// Uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
// Create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
const map = (array, callback) => {
  const mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    mappedArray.push(callback(array[i]));
  }
  return mappedArray;
};

console.log(map([1, 2, 3], addTwo));


// Challenge 4
// The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.

const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

// See for yourself if your forEach works!
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, char => alphabet += char);
console.log(alphabet);   //prints 'abcd'


// Challenge 5
// For this challenge, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.
const mapWith = (array, callback) => {
	 const mappedArray = [];
   forEach(array, el => mappedArray.push(callback(el)));
  return mappedArray;
};

let val = mapWith([1,2,3,4], addTwo);
console.log(val)

// Challenge 6
// The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
const reduce = (array, callback, initialValue) => {
  let acc = initialValue;
	for(let i=0; i<array.length; i++){
   acc = callback(acc, array[i])
  }
  return console.log(acc)
};

const nums = [4, 1, 3];
const add = (a, b) => a + b; 
reduce(nums, add, 0);   //-> 8


// Challenge 7
// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!
const intersection = (...arrays) => {
  return arrays.reduce((acc, curr) => {
    return acc.filter(el => curr.includes(el));
  });
};

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]


// Challenge 8
// Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!
const union = (...arrays) => {
  let array = arrays.flat()
  let newArr = [];
  for(let i=0; i<array.length; i++){
    if(!newArr.includes(array[i])){
      newArr.push(array[i]);
    }
  }
  return newArr;

};

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

const objOfMatches = (array1, array2, callback) => {
let obj = {};
  for(let i = 0; i < array1.length; i++){
    if(callback(array1[i]) === array2[i]){
      obj[array1[i]] = array2[i]
    }
  }
  return obj
};

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], (str) => str.toUpperCase()));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
const multiMap = (arrVals, arrCallbacks) => {
  let obj = {};
	for(let i=0; i<arrVals.length; i++){
      obj[arrVals[i]] = [];
    for(let j=0; j<arrCallbacks.length; j++){
    obj[arrVals[i]].push(arrCallbacks[j](arrVals[i]))
  	}
  }
  return obj
};

console.log(multiMap(['catfood', 'glue', 'beer'], [(str) => str.toUpperCase(), (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(), (str) => str + str]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
// Create a function commutative that accepts two callbacks and a value. commutative will return a boolean indicating if the passing the value into the first function, and then passing the resulting output into the second function, yields the same output as the same operation with the order of the functions reversed (passing the value into the second function, and then passing the output into the first function).
const commutative = (func1, func2, value) => {
	return (func1(func2(value)) ===func2(func1(value))) ?true : false;
};

// /*** Uncomment these to check your work! ***/
const multBy3 = n => n * 3;
const divBy4 = n => n / 4;
const subtract5 = n => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 12
// Create a function objFilter that accepts an object and a callback. objFilter should make a new object, and then iterate through the passed-in object, using each key as input for the callback. If the output from the callback is equal to the corresponding value, then that key-value pair is copied into the new object. objFilter will return this new object.
const objFilter = (obj, callback) => {
	let objkey = Object.keys(obj);
  let newObj = {};
  for(let key of objkey){
    let numericKey = Number(key);
    if(callback(numericKey) === obj[key])
      newObj[key] = obj[key]
    
  }
  return newObj;
};

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = n => n / 2;
console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 13
// Create a function pipe that accepts an array (of functions) and a value. pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. pipe should return the final output.
const pipe = (arrOfFuncs, value) => {
  let str = "";
	for(let func of arrOfFuncs){
    value = func(value);
  }
  return value
};

// /*** Uncomment these to check your work! ***/
const capitalize = str => str.toUpperCase();
const addLowerCase = str => str + str.toLowerCase();
const repeat = str => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

