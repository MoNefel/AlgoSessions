/*
Book Index

you are given an array of page numbers (as integers).
you job is to return a string where:
*single pages appear as they are (like5).
Consecutive pages are combined into a range (like 13-15 for 13,14,15).

*/

var nums1 = [1, 13, 14, 15, 37, 38, 70];
var expected1 = "1, 13-15, 37-38, 70";

var nums2 = [1, 2, 3, 7, 9, 15, 16, 17];
var expected2 = "1-3, 7, 9, 15-17";

function bookIndex(pages) {
  var result = [];
  var start = pages[0];
  var end = pages[0];

  for (var i = 1; i < pages.length; i++) {
    //
    if (pages[i] === end + 1) {
      end = pages[i];
    } else {
      if (start === end) {
        result.push(start);
      } else {
        result.push(`${start}-${end}`);
      }
      start = pages[i];
      end = pages[i];
    }
  }

  if (start === end) {
    result.push(start);
  } else {
    result.push(`${start}-${end}`);
  }

  return result.join(", ");
}

//console.log(bookIndex(nums1));
console.log(bookIndex(nums2));
