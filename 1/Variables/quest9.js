//bir sayıdan bir sayıya kadar olan toplam

var sayiBir = parseInt(prompt("1. Sayıyı Giriniz= ?"));

do{
    var sayiIki = parseInt(prompt("2. Sayıyı Giriniz = ?","Must be higher than first number"))
}while(!(sayiIki>sayiBir));

var toplam = 0 ;

for(let i = sayiBir ; i < sayiIki ; i++){
    toplam += i
}

alert(toplam)


var formulToplam = ((sayiIki*(sayiIki-1))/2) - ((sayiBir*(sayiBir-1))/2);

alert(formulToplam)