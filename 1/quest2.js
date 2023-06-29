//fahrenit derece
var userInput = prompt("Sıcaklık Değeri Giriniz ?");
console.log(userInput);

var fahrenheit=userInput;
var celcius= 5/9 * (fahrenheit - 32);

alert(celcius.toFixed(2) + " Derece")