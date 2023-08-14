//100 lük => Harf Sistemi 


do{
    var x = parseInt(prompt("Notunuzu Giriniz= ?"));
}while((100 < x < 0))
/*

100-80 AA
80-60 BB
60-40 CC
40-0 Kaldı

*/

if(x>=80){
    alert("AA");
}

else if(x>=60){
    alert("BB");
}
    
else if(x>=40){
    alert("CC");
}

else{
    alert("Kaldı");
}