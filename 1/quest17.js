//girilen sayıların çarpımı 

var x = parseInt(prompt("Sayı Giriniz= ?"));
var toplam = 1;

while(x != 0){
    toplam = toplam * x;
    var x = parseInt(prompt("Sayı Giriniz= ?"));

}

alert("Sonuç: "+toplam)