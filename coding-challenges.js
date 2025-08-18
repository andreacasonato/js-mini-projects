// 1. Write a function, greetWorld(). 
// Your function should have no parameters and return the string 'Hello, World!'

const greetWorld = () => {
    return "Hello, World!";
};

console.log(greetWorld());

// 2. The most common minimum age to vote is 18. 
// Write a function canIVote() that takes in a number, representing a person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.

function canIVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(canIVote(19))

// 3. Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.

function agreeOrDisagree(str1, str2) {
    if (str1 === str2) {
        return 'You agree!';
    } else {
        return 'You disagree!';
    }
}

// 4. Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

// Here are the classifications:

// 0-3 should return 'baby'
// 4-12 should return 'child'
// 13-19 should return 'teen'
// 20-64 should return 'adult'
// 65-140 should return 'senior citizen'

// All of the ranges are inclusive of the beginning and ending numbers. 
// If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'

function lifePhase(age) {
    if (age >= 0 && age <= 3) {
        return 'baby';
    } else if (age >= 4 && age <= 12) {
        return 'child';
    } else if (age >= 13 && age <= 19) {
        return 'teen';
    } else if (age >= 20 && age <= 64) {
        return 'adult';
    } else if (age >= 65 && age <= 150) {
        return 'senior citizen';
    } else {
        return 'This is not a valid age';
    }
}

// 5. Write a function, finalGrade(). It should:

// - take three number arguments
// - return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
// - otherwise, find the average of those three numbers
// - return the letter grade (as a string) that the average corresponds to

// Assuming all the grades are valid, return a single letter representing the final grade based on the following scale:
// 0–59 should return: 'F'
// 60–69 should return: 'D'
// 70–79 should return: 'C'
// 80–89 should return: 'B'
// 90–100 should return: 'A'

function finalGrade(num1, num2, num3) {
    // Check for invalid values
    if (
        num1 < 0 || num1 > 100 ||
        num2 < 0 || num2 > 100 ||
        num3 < 0 || num3 > 100
    ) {
        return 'You have entered an invalid grade.';
    }

    // Calculate the average
    let average = (num1 + num2 + num3) / 3;

    // Return the letter based on the average
    if (average <= 59) {
        return 'F';
    } else if (average <= 69) {
        return 'D';
    } else if (average <= 79) {
        return 'C';
    } else if (average <= 89) {
        return 'B';
    } else {
        return 'A';
    }
}

// 6. Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’

function reportingForDuty(rank, lastName) {
    return `${rank} ${lastName} reporting for duty!`;
}

reportingForDuty('Private', 'Fido'); // 'Private Fido reporting for duty!'


// 7. We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled. 
// It’s close to doing what we want, but there’s something not quite right. Can you fix our code, please?

const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // Multiplying by 6 gives a number from 0 up to, but not including, 6
    // Math.floor(...) turns it into an integer from 0–5, and +1 gives 1–6
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    return die1 + die2;
}

// 8. Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

// Write a function, calculateWeight(). It should:

// - take two parameters: earthWeight and planet
// - expect earthWeight to be a number
// - expect planet to be a string
// - return a number representing what that Earth-weight would equate to on the planet passed in.
// - The final weight should be calculated based on the following:

// 'Mercury' weight = earthWeight * 0.378
// 'Venus' weight = earthWeight * 0.907
// 'Mars' weight = earthWeight * 0.377<
// 'Jupiter' weight = earthWeight * 2.36
// 'Saturn' weight = earthWeight * 0.916
// For any other planetary inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'

function calculateWeight(earthWeight, planet) {
    switch (planet) {
        case 'Mercury':
            return earthWeight * 0.378;
        case 'Venus':
            return earthWeight * 0.907;
        case 'Mars':
            return earthWeight * 0.377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * 0.916;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
}

calculateWeight(100, 'Mars');

// 9. It can be hard to keep track of what’s truthy or falsy in JavaScript. 
// Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.

function truthyOrFalsy(value) {
    return Boolean(value);
}

truthyOrFalsy('hello');   // true
truthyOrFalsy(0);         // false
truthyOrFalsy('');        // false
truthyOrFalsy({});        // true
truthyOrFalsy(null);      // false

// 10. A person’s number of imaginary friends are always 25% (or 1/4) of their total friends.

// Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.
// Since friends can only come in whole numbers, be sure to round your result up to the nearest whole number before returning it.
// The JavaScript Math.ceil() function will come in handy. Check out the documentation here to figure out how it works.

function numImaginaryFriends(totalFriends) {
    return Math.ceil(totalFriends * 0.25);
}

numImaginaryFriends(20);  // 5
numImaginaryFriends(5);   // 2  (because 5 × 0.25 = 1.25, and Math.ceil rounds up to 2)


// 11. Write a function, sillySentence(), that has 3 string parameters and returns the following sentence with the blanks filled in by the arguments passed into the function.

function sillySentence(adjective, verb, noun) {
    return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
}

sillySentence('excited', 'love', 'functions');

// 12. Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

// - If the year is in the future, you should return a string in the following format:
// 'You will be [calculated age] in the year [year passed in]'

// - If the year is before they were born, you should return a string in the following format:
// 'The year [year passed in] was [calculated number of years] years before you were born'

// - If the year is in the past but not before the person was born, you should return a string in the following format:
// 'You were [calculated age] in the year [year passed in]'

function howOld(age, year) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;

    if (year > currentYear) {
        const futureAge = age + (year - currentYear);
        return `You will be ${futureAge} in the year ${year}`;
    } else if (year < birthYear) {
        const yearsBeforeBorn = birthYear - year;
        return `The year ${year} was ${yearsBeforeBorn} years before you were born`;
    } else {
        const pastAge = year - birthYear;
        return `You were ${pastAge} in the year ${year}`;
    }
}

howOld(30, 2030); // 'You will be 37 in the year 2030'
howOld(30, 1990); // 'The year 1990 was 3 years before you were born'
howOld(30, 2015); // 'You were 22 in the year 2015'

// 13. Create a function called whatRelation() that takes one number argument (percentSharedDNA) and returns a string describing the likely relationship based on the following:

// 100  -> 'You are likely identical twins.'
// 35–99 -> 'You are likely parent and child or full siblings.'
// 14–34 -> 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
// 6–13  -> 'You are likely 1st cousins.'
// 3–5   -> 'You are likely 2nd cousins.'
// 1–2   -> 'You are likely 3rd cousins.'
// 0     -> 'You are likely not related.'

// Hint: check the highest ranges first so the correct comparison runs.

const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.';
    }
    if (percentSharedDNA >= 35) {
        return 'You are likely parent and child or full siblings.';
    }
    if (percentSharedDNA >= 14) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.';
    }
    if (percentSharedDNA >= 6) {
        return 'You are likely 1st cousins.';
    }
    if (percentSharedDNA >= 3) {
        return 'You are likely 2nd cousins.';
    }
    if (percentSharedDNA >= 1) {
        return 'You are likely 3rd cousins.';
    }
    return 'You are likely not related.';
}

console.log(whatRelation(34));
// You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.

console.log(whatRelation(3));
// You are likely 2nd cousins.

// 14. Create a function, tipCalculator(), that has two parameters — a string representing the quality of the service received and a number representing the total cost.

// Return the tip amount, as a number, based on the following quality index:

// - 'bad' should return a 5% tip
// - 'ok' should return a 15% tip
// - 'good' should return a 20% tip
// - 'excellent' should return a 30% tip
// - any other quality inputs should default to an 18% tip

function tipCalculator(quality, total) {
    let tipPercentage;

    switch (quality.toLowerCase()) {
        case 'bad':
            tipPercentage = 0.05;
            break;
        case 'ok':
            tipPercentage = 0.15;
            break;
        case 'good':
            tipPercentage = 0.20;
            break;
        case 'excellent':
            tipPercentage = 0.30;
            break;
        default:
            tipPercentage = 0.18;
    }

    return total * tipPercentage;
}

console.log(tipCalculator('good', 100)); // Output: 20
console.log(tipCalculator('excellent', 50)); // Output: 15
console.log(tipCalculator('meh', 80)); // Output: 14.4 (default 18%)

// 15. Write a function, toEmoticon(), that takes in a string as a parameter and returns the corresponding emoticon as a string.
// The returned value should be based on the following:

// - 'shrug' should return '|_{"}_|'
// - 'smiley face' should return ':)'
// - 'frowny face' should return':('
// - 'winky face' should return ';)'
// - 'heart' should return '<3'
// - any other input should return '|_(* ~ *)_|'

function toEmoticon(emotion) {
    switch (emotion.toLowerCase()) {
        case 'shrug':
            return '|_{"}_|';
        case 'smiley face':
            return ':)';
        case 'frowny face':
            return ':(';
        case 'winky face':
            return ';)';
        case 'heart':
            return '<3';
        default:
            return '|_(* ~ *)_|';
    }
}

console.log(toEmoticon('shrug'));        // Output: |_{"}_|
console.log(toEmoticon('smiley face'));  // Output: :)
console.log(toEmoticon('unknown'));      // Output: |_(* ~ *)_|
