//Asal sayı bulma 

var x = parseInt(prompt("Sayı Giriniz= ?"));
var kontrol = 0;
var metin = "";

for(let i = 2 ; i<=x ; i++){

    for(let j = i-1 ; j > 1 ; j--){
        if(i % j == 0){
            kontrol++
        }
    }
    if(kontrol == 0){
        metin = metin + i + ",";
    }
    kontrol=0;

}

alert(metin);