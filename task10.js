
function commonCharacters(string1, string2){
    let commonCharArray = ["Common letters: "];
    
    let array1 = Array.from(string1);
    let array2 = Array.from(string2);

    for(i = 0;i < array1.length; i++){
        if (array2.indexOf(array1[i]) != -1){   // -1 means that the element is not there
            commonCharArray.push(array1[i]);    // will push element if it's not -1 (b will not be pushed)
        }
    }
    console.log(commonCharArray);
    
}
commonCharacters("bale", "manicure");
