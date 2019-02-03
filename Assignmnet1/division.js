// Question6 Given the percentage of a student, find out the division of that student. Conditions:
//
// Distinction if 100 > percentage >= 80
// First Division if 80 > percentage >= 60
// Second Division if 60 > percentage >= 40
// Third Division if 40 > percentage >= 32
// Else fail

"use strict"

const studentDivision=(percentage)=>{
    if(percentage >= 80 && percentage<100){
        console.log("Distinction");
    }

    else if(percentage>=60 && percentage<80){
        console.log("First Division");
    }

    else if(percentage>=40 && percentage<60){
        console.log("second Division");
    }

    else if(percentage>=32 && percentage<60){
        console.log("Third Division");
    }

    else{

        console.log("Fail");
    }


}

studentDivision(80);