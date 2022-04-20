
function celciusToFahrenheit(celcius){
    const fahr = (celcius * 1.8) + 32;
    return fahr;
}
function fahrenheitToCelcius(fahrenheit){
    const cel = (fahrenheit - 32) * 0.5556;
    const celRound = Math.round(cel);  // Rounding cel to the nearest integer
    return celRound;
}

const celtofahr = celciusToFahrenheit(5);
const farhtocel = fahrenheitToCelcius(41);
console.log(celtofahr + " F");  // testing the code
console.log(farhtocel + " C");  // testing the code

