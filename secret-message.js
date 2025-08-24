// Starting array of words
let secretMessage = [
    'Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily',
    'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can',
    'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'
];

console.log(secretMessage.length); // 24 (original length)

// 1. Remove the last string of the array
secretMessage.pop();
console.log(secretMessage.length); // 23 (one less than before)

// 2. Add the words "to" and "Program" at the end
secretMessage.push('to', 'Program');

// 3. Find the index of the word "easily" (returns 7)
let index = secretMessage.indexOf('easily');
console.log("Index of 'easily':", index);

// 4. Replace "easily" with "right"
secretMessage[index] = 'right';
console.log(secretMessage);

// 5. Remove the first string of the array
secretMessage.shift();
console.log(secretMessage);

// 6. Add the string "Programming" to the beginning
secretMessage.unshift('Programming');
console.log(secretMessage);

// 7. Remove "get", "right", "the", "first", "time,"
// and replace them with the single string "know"
secretMessage.splice(6, 5, 'know');
console.log(secretMessage);

// 8. Join all words together into a sentence
console.log(secretMessage.join(" "));

// Programming is not about what you know it is about 
// what you can figure out. 
// -2015, Chris Pine, Learn to Program