/*
Acronyms
Create a function that takes a string and returns the acronym of that string.(first letter of each word in uppercase).
Do it with .split first if you need to, then try to do it without
*/

const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const srt3 = "software development life cycle";
const expected3 = "SDLC";

//Bonus : ingnore extra spaces
const str4 = "   global     information    tracker      ";
const expected4 = "GIT";

console.log(str1.split(" "));

function acronymize(str) {
  // Split the string into words
  var words = str.split(" ");
  var acronym = "";

  // Loop through each word
  for (var i = 0; i < words.length; i++) {
    const word = words[i];
    // If the word isn't empty (in case of extra spaces)
    if (word.length > 0) {
      // Add the first letter in uppercase
      acronym += word[0].toUpperCase();
    }
  }

  return acronym;
}
console.log(str1[0]);
console.log(acronymize(str1)); // OOP
console.log(acronymize(str4)); // GIT
console.log(acronymize(str2)); // APIE
