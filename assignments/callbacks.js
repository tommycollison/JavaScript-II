const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.

return cb(arr);
}

function first(items) {
   console.log(items[0]);
 } 

firstItem(items, first);


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.

return cb(arr);
}

function length(items) {
  console.log(items.length)
}

getLength(items, length);

function last(arr, cb) {
  // last passes the last item of the array into the callback.

return cb(arr);
}

function lastitem(items, last) {
  console.log(items[3]);
}

last(items, lastitem);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
return cb(x, y);
}

function addNums(x, y) {
    console.log(x+y);
}
    
 sumNums(3, 4, addNums);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
return cb(x, y);
}

function multiplication_nums(x, y) {
    console.log(x*y);
}
  
 multiplyNums(12, 6, multiplication_nums);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

console.log(list.includes(item));
} 

let checkMcCheckerson = function(item, list) {
  if (list.includes(item) === true) {
    return true
  } else {
    return false
  }
}

contains('yo-yo', items, checkMcCheckerson); // return true
contains('John Spraul', items, checkMcCheckerson); // return false

/* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
// }
