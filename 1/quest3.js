//Artık Yıl
var userInput = parseInt(prompt("Yıl Giriniz ?"));
console.log(userInput);

var artikMi;

if ( (userInput%400 == 0) || (userInput%4 == 0 && userInput%100 != 0)  ){
    artikMi = true;
}
else {
    artikMi = false;
}

alert(artikMi ? "Artık yıl" : "Artık yıl değil")