
function celciusToFahrenheit(celcius){
    let fahr = (celcius * 1.8) + 32;
    return fahr;
}
function fahrenheitToCelcius(fahrenheit){
    let cel = (fahrenheit - 32) * 0.5556;
    let celRound = Math.round(cel);  // Rounding cel to the nearest integer
    return celRound;
}

const celtofahr = celciusToFahrenheit(5);
const farhtocel = fahrenheitToCelcius(41);
console.log(celtofahr + " F");  // testing the code
console.log(farhtocel + " C");  // testing the code

