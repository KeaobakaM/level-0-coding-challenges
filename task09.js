
function vowelCheck(word){
    
    const wordArray = Array.from(word);
    const vowelArray = ["a","e","i","o","u"];
    const vowelUpperArray = ["A","E","I","O","U"];
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