function add(number1, number2){
	return number1 + number2;
}
function subtract(number1, number2){
	return number1 - number2;
}
function multiply(number1, number2){
	return number1 * number2;
}
function divide(number1, number2){
	return number1 / number2;
}
function remainder(number1, number2){
	return number1 % number2;
}
function celsiusToFahrenheit(number){
  number *= 1.8;
  number += 32;
  return number;
}
function fahrenheitToCelsius(number){
  number -= 32;
  number *= .5556;
  return number;
}
const number1 = parseInt(prompt("Enter a number:"));
//const number2 = parseInt(prompt("Enter another number:"));
const result = (fahrenheitToCelsius(number1));

alert(result);