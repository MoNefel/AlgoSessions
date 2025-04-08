//given an array of numbers, create a function that returns a new array with all duplicate numbers are removed,
//exmp [1,2,3,4,4,5,6,6] returns [1,2,3,4,5,6]

function removeDuplicates(arr) {
  var unique = [];

  for (var i = 0; i < arr.length; i++) {
    var found = false;

    // Check if number already exists in unique array
    for (var j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        found = true;
        break; // Exit inner loop if duplicate found
      }
    }

    // If not found, add it to unique array
    if (!found) {
      unique.push(arr[i]);
    }
  }

  return unique;
}
