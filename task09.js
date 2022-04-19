
function vowelCheck(word){
    
    let wordArray = Array.from(word);
    let vowelArray = ["a","e","i","o","u"];
    let vowelUpperArray = ["A","E","I","O","U"];
    let compareArray = [];

    let newArray = [];
    
    for (i = 0; i < vowelArray.length; i++){
        if (wordArray.indexOf(vowelArray[i]) != -1){  
            newArray.push(" " + vowelArray[i]);
        }
        else if (wordArray.indexOf(vowelUpperArray[i]) != -1){  
            
            newArray.push(" " + vowelUpperArray[i]);
        }
    }
    
    let newString = newArray.toString();
    console.log("Vowels: " + newString.toLocaleLowerCase()); 
}    
vowelCheck("OzOne");