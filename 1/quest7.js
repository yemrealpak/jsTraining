//Vize - Final geçme = 50 finalin %60 ı 

do{
    var vize = parseInt(prompt("Vize notunu giriniz = ?" , "0-100"))
}while(!(0<=vize<=100));


do{
    var final = parseInt(prompt("final notunu giriniz = ?" , "0-100"))
}while(!(0<=final<=100));


var vizeOrt = vize * 0.40 ;
var finalOrt = final * 0.60;
var ort = vizeOrt + finalOrt;

alert("Ortalama : "+ ort.toFixed(2) +( (ort >= 50) ? " Geçti" : " Kaldı" ))
