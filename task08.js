
function hoursAndMinutes(time){
    var h = time / 60;
    var hours = parseInt(h);                 //so that hours won't give any remainders 
    var minutes = time % 60;
    if(hours == 1){
        console.log(hours + " hour, " + minutes + " minutes");
    }
    else if(hours > 1){
        console.log(hours + " hours, " + minutes + " minutes");
    }else{
        console.log(minutes + " minutes")
    }
    
}
hoursAndMinutes(230);