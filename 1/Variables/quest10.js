//sayı piramidi console.log (yarım)

var sayiBir = parseInt(prompt("Sayıyı Giriniz= ?"));

var metin = "";

for(let i = 1 ; i<=sayiBir ; i++){
    
    if( i==1){
        metin = metin + i ;
    }
   
    else{
        metin = metin + "," + i    ;
    }
    console.log(metin)
}



console.log(metin)