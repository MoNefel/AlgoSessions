// Given an array of numbers, create a function that returns a new array where all even numbers are double and all odd numbers are tripled.
//for example :
// transforNumbers([1, 2, 3, 4, 5]) should return [3, 4, 9, 8, 15]

function transforNumbers(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arr[i] = arr[i] * 2;
    } else {
      arr[i] = arr[i] * 3;
    }
  }
  return arr;
}

var x = transforNumbers([2, 3, 4, 5, 6]);
console.log(x);
