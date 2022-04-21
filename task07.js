
function celciusToFahrenheit(celcius){
    const fahr = (celcius * 1.8) + 32;
    return fahr;
}
function fahrenheitToCelcius(fahrenheit){
    const cel = (fahrenheit - 32) * 0.5556;
    const celRound = Math.round(cel);  // Rounding cel to the nearest integer
    return celRound;
}

const celToFahr = celciusToFahrenheit(5);
const farhToCel = fahrenheitToCelcius(41);
console.log(celToFahr + " F");  // testing the code
console.log(farhToCel + " C");  // testing the code

