function main() {
    var a = "abc";
    var b = "cde";
    console.log(a);
    console.log(b);
    
    var alphabet=[];  // create an empty array 
    for (var i = 0; i < 27; i++){  // fill it with 27 0's, each representaing a number in the alphabet 
         alphabet.push(0);
    };

    for (var i = 0; i < a.length; i++){  // increment alphabet array for all the letters in array 1
        var alphaIndex = a.charCodeAt(i) - "a".charCodeAt(0);
        alphabet[alphaIndex] += 1;
    };

    for (var i = 0; i < b.length; i++){  // decrement alphabet array for all the letters in array 2
        var alphaIndex = b.charCodeAt(i) - "a".charCodeAt(0);
        alphabet[alphaIndex] -= 1;
    };
    
    var tally = 0;  // tally the results 
    for (var i = 0; i < alphabet.length; i++){
        tally += Math.abs(alphabet[i]);
    }

    console.log(tally);

}