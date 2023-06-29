//kenarları girilen üçgenin çeşidini veren uygulama

var bir = parseInt(prompt("1. Kenarı giriniz = ?"))
var iki = parseInt(prompt("2. Kenarı giriniz = ?"))
var uc= parseInt(prompt("3. Kenarı giriniz = ?"))

if (bir == iki && bir == uc && iki == uc){
    alert("Eşkenar")
}

else if (bir == iki || bir == uc || iki == uc){
    alert("ikizkenar")
}

else if ((bir == 3 && iki == 4 && uc == 5 )||(bir == 4 && iki == 3 && uc == 5 )||(bir == 5 && iki == 4 && uc == 3 )||(bir == 5 && iki == 3 && uc == 4 )){
    alert("3-4-5 e yamuk diyemeyiz Galp Üçgen")
}

else
    alert("yamuk üçgen :D")
