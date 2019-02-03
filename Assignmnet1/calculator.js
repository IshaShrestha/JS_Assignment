// Question 4 The Calculator
//
//     Write a function that will take one argument (a number) and perform the following operations:
//         Take half of the number and store the result.
//         Square the result of #1 and store that result.
//         Calculate the area of a circle with the result of #2 as the radius.

function Calculator(number){
    const half= number/2;
    const square= half*half;
    const area= 3.14*square*square;

    return area
}

console.log("Area is " + Calculator(10))