//sayı piramidi console.log (yarım) (x)

var sayiBir = parseInt(prompt("Sayıyı Giriniz= ?"));

var metin = "";

for(let i = 1 ; i<=sayiBir ; i++){
    
    if( i==1){
        metin = metin + "x" ;
    }
   
    else{
        metin = metin  + "x"    ;
    }
    console.log(metin)
}



