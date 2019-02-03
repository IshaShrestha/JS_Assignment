// Question 3 The Temperature Converter
//
//     Store a celsius temperature into a variable.
//     Convert it to fahrenheit and output "NN°C is NN°F".
//     Now store a fahrenheit temperature into a variable.
//     Convert it to celsius and output "NN°F is NN°C."

var celsius= 121;

const fahrenheit= celsius * 1.8 + 32;

console.log(celsius +"°C is" + fahrenheit +"°F.");

var celsius = (fahrenheit-32)/1.8;

console.log(fahrenheit +"°F is" + celsius + "°C.");