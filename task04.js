
function evenOrOdd (number){
    let remain = 0;
    remain = number % 2;
    if (remain == 0){
        return console.log("even");
    }else{
        return console.log("odd")}
}
evenOrOdd(5);