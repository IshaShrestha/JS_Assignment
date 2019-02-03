//Question 7 Write a function named pluralize that: takes 2 arguments, a noun and a number. returns the number and pluralized form, like "5 cats" or "1 dog".
//
// For example:
//
// pluralize('cat', 1) // Outputs: 1 cat
// pluralize('cat', 2) // Outputs: 2 cats

"use strict"

const Pluralizer = (str1, number) =>{
    if(number>1){

        console.log(number + " "+ str1 + "s");

    }
    else{
        console.log(number + " " + str1);
    }

}

Pluralizer(" cat",3);

