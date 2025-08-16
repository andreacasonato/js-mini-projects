let raceNumber = Math.floor(Math.random() * 1000);

let registered = true;
let runnerAge = 23;

if (runnerAge >= 18 && registered === true) {
    raceNumber += 1000;
}

if (runnerAge > 18 && registered === true) {
    console.log(`You will race at 9:30am. This is your race number: ${raceNumber}. Have a good one!`);
} else if (runnerAge > 18 && registered === false) {
    console.log(`You will race at 11:00am. This is your race number: ${raceNumber}. Have a good one!`);
} else if (runnerAge < 18) {
    console.log(`You will race at 12:30pm. This is your race number: ${raceNumber}. Have a good one!`);
} else {
    console.log('Visit the registration desk');
}