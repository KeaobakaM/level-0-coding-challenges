
function maximumNumber(numA,numB,numC){
    if (numA > numB && numA > numC){
        return numA;  
    }
    else if(numB > numA && numB > numC){
        return numB;
    }else{
        return numC;
    }
} 

const whichIsTheMax = maximumNumber(1,5,2);
console.log(whichIsTheMax);