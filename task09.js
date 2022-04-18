
function vowelCheck(word){
    
    let wordArray = Array.from(word);
    let vowelArray = ["a,e,i,o,u"];
    let newArray = ["Vowels: "];
    
    
    for (let i = 0; i < wordArray.length; i++){
    if (wordArray[i] == "a" || wordArray[i] == "A"){   
        newArray.push("a");
         
    }
    if (wordArray[i] == "e" || wordArray[i] == "E"){
        newArray.push("e");;
        
    }
    if (wordArray[i] == "i" || wordArray[i] == "I"){
        newArray.push("i");
        
    }
    if (wordArray[i] == "o" || wordArray[i] == "O"){
        newArray.push("o");
       
    }
    if (wordArray[i] == "u" || wordArray[i] == "U"){
        newArray.push("u");
    }
}
    let newString = newArray.toString();
    console.log(newString); 
}    
vowelCheck("morning");