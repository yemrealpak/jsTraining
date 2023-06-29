//Sıcak soğuk oyunu

var randomX = parseInt((Math.random() * 100)+1);
console.log("Cevap = " + randomX);

var ilk = 0;
do{
    var tahmin = parseInt(prompt(((ilk>0) ? (tahmin>randomX) ? "büyük": "küçük": "Sayı Giriniz = ?" )));
    ilk++
}while(tahmin != randomX)

alert("Tebrikler");
