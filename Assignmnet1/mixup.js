//Question 5 The MixUP
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
// mixUp('mix', 'pod'); // Outputs: 'pox mid'
// mixUp('dog', 'dinner'); // Outputs:  'dig donner'

function MixUp(str1,str2){
    if(str1.length>=2 && str1.length>=2){
        var temp1= str1.slice(0,2);
        var temp2= str2.slice(0,2);
        var mixup1= temp2 + str1.slice(2);
        var mixup2= temp1 + str2.slice(2);


        console.log(mixup1 + " " + mixup2)
    }

    else{
        console.log("The length is smaller than 2")
    }
}MixUp("BANGTAN","BOYS")
