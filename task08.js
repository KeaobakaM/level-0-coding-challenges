
function hoursAndMinutes(time){
    const total = time / 60;
    const hours = parseInt(total);                 //so that hours won't give any remainders 
    const minutes = time % 60;
    let hourWord;
    let minuteWord;

    if (hours == 1){
        hourWord = " hour ";
    }
    else {hourWord = " hours "}
    
    if (minutes == 1){
        minuteWord = " minute";
    }
    else {minuteWord = " minutes"};
    console.log(hours + hourWord + minutes + minuteWord);
}
hoursAndMinutes(61);