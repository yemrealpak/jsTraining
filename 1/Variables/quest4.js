//Sayı Tahmin Oyunu 


do{
    var random = (Math.random() * 100) + 1;
}while(random == 100);

console.log(random);


var randomSayı = Math.floor(random);
console.log(randomSayı);
var kazanılanPara = 0;



var userHak = 5;

var basamakBirler = parseInt(randomSayı % 10);
var basamakOnlar = parseInt(randomSayı / 10);

console.log("Birler Basamak = " + basamakBirler);
console.log("Onlar Basamak = " + basamakOnlar);

 while(userHak>0){
     userHak--;
     console.log("tur başı kazanılan para : " + kazanılanPara)
     var tahmin = parseInt(prompt("Tahmin Ediniz ? " + (5 - userHak) + ".Tur"));

     var tahminBasamakBirler = parseInt(tahmin % 10);
     var tahminBasamakOnlar = parseInt(tahmin / 10);

     if(tahmin == randomSayı){
         alert("Tebrikler")
         kazanılanPara += 10000;
         console.log("para verdim : " + kazanılanPara)
         break;
     }
     else if(tahmin < randomSayı){
         alert("Büyült , Kalan Hak:" + userHak);

         console.log("tahmin birler"+tahminBasamakBirler)
         console.log("birler"+basamakBirler)
         console.log("tahmin onlar"+tahminBasamakOnlar)
         console.log("birler"+basamakOnlar)
         if(tahminBasamakBirler == basamakBirler || tahminBasamakBirler == basamakOnlar && tahminBasamakOnlar == basamakOnlar || tahminBasamakOnlar == basamakBirler ){
            kazanılanPara += 3000;
            
         }
         

         else if(tahminBasamakBirler == basamakBirler || tahminBasamakOnlar == basamakOnlar || tahminBasamakOnlar == basamakBirler || tahminBasamakBirler == basamakOnlar){
            kazanılanPara += 1000;
            
         }
         
            
     }
     else if(tahmin > randomSayı){
         alert("Küçült , Kalan Hak:" + userHak);
         if(tahminBasamakBirler == basamakBirler || tahminBasamakBirler == basamakOnlar && tahminBasamakOnlar == basamakOnlar || tahminBasamakOnlar == basamakBirler ){
            kazanılanPara += 3000;
            
         }
         

         else if(tahminBasamakBirler == basamakBirler || tahminBasamakOnlar == basamakOnlar || tahminBasamakOnlar == basamakBirler || tahminBasamakBirler == basamakOnlar){
            kazanılanPara += 1000;
            
         }
     }

     if(tahminBasamakOnlar == basamakOnlar && (5 - userHak) != 5){
        alert("ha gayret")
     }

     console.log("tur sonu kazanılan para : " + kazanılanPara)
 }

 alert("Tebrikler " + kazanılanPara + "TL kazandınız")