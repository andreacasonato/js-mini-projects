// Returns a random event from three possible events
const getRandEvent = () => {
    // random is now scoped *inside* the function, so each call gets its own random value
    const random = Math.floor(Math.random() * 3);

    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon';
    }
};

// Returns the number of training days based on the event passed in
const getTrainingDays = event => {
    // Create days once in this function’s block scope
    let days;

    if (event === 'Marathon') {
        // Assign a value (no new variable is created)
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentathlon') {
        days = 200;
    }

    return days;
};

// Global variable for the main athlete’s name
const name = 'Nala';

// Logs the athlete’s event to the console
// Note: name is explicitly passed in to avoid using a global variable inside the function
const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};

// Logs the athlete’s training time to the console
const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};

// ----- First athlete -----
const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(name, event);
logTime(name, days);

// ----- Second athlete -----
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
// Name is scoped locally for this athlete
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);
