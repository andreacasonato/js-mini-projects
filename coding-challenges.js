// 1. Write a function, greetWorld(). Your function should have no parameters and return the string 'Hello, World!'

const greetWorld = () => {
    return "Hello, World!";
};

console.log(greetWorld());

// 2. The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing a person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.

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

// All of the ranges are inclusive of the beginning and ending numbers. If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'

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
