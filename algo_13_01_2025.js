/*
given a string;
return a new string with the duplicates excluded
*/

/* var str = "helloo"
var expected = "helo"

function stringDedupe(str){
    var result = ""
    for (var i = 0; i < str.length; i++){
        if(!result.includes(str[i]))
            result += str[i];
    }
    return result;
}

var x = stringDedupe("mmohhammeed")
console.log(x) */



function validParentheses(s) {
    let stack = []; // This stack will keep track of the opening parentheses.

    for (let char of s) { // Go through each character in the string.
        if (char === '(') {
            stack.push(char); // Add '(' to the stack.
        } else if (char === ')') {
            if (stack.length === 0) {
                // If we find a ')' but there's no '(' in the stack, it's invalid.
                return false;
            }
            stack.pop(); // Remove the last '(' from the stack because it's matched.
        }
    }

    // If the stack is empty, all '(' were matched with ')'.
    return stack.length === 0;
}

console.log(validParentheses("a(b))(c"))