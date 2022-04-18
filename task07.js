
function celciusToFahrenheit(celcius){
    let fahr = (celcius * 1.8) + 32;
    console.log(fahr + " F");
}
function fahrenheitToCelcius(fahrenheit){
    let cel = (fahrenheit - 32) * 0.5556;
    let celRound = Math.round(cel);  // Rounding cel to the nearest integer
    console.log(celRound + " C");
}

celciusToFahrenheit(5);
fahrenheitToCelcius(41);

