// Create a variable named Kelvin
const kelvin = 293;

// Convert kelvin to Celsius
const celsius = kelvin - 273;

// Convert celsius to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Round down Fahrenheit variable
fahrenheit = Math.floor(fahrenheit);

// Convert celsius to Newton
let newton = celsius * (33 / 100);

// Round down Newton variable
newton = Math.floor(newton);

// Display temperatures
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${kelvin} degrees Kelvin.`);

console.log(`The temperature is ${celsius} degrees Celsius.`);

console.log(`The temperature is ${newton} degrees Newton.`)