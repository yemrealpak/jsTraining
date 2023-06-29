//x>0 , y<0 => f(x,y) = 4x+2y+4
//x>0 , y=0 => f(x,y) = 2x-y+3
//x<0 , y>0 => f(x,y) = 3x+4y+3


do{
var x = parseInt(prompt("X= ?"));
}while(x == 0)
var y = parseInt(prompt("Y= ?"));

var funcSay = 0;
var final = 0;
var metin = "";
console.log("(x,y)" + x + y);

if (x>0 && y<0) {
    final = (4*x)+(2*y)+4;
    funcSay++;
    metin = metin +"(4*x)+(2*y)+4";
}

else if (x>0 && y==0) {
    final = (2*x)-(y)+3;
    funcSay++;
    metin = metin + "(2*x)-(y)+3";
}

else if (x<0 && y>0) {
    final = (3*x)+(4*y)+3;
    funcSay++;
    metin = metin + "(3*x)+(4*y)+3";
}

alert(( (funcSay > 0) ? " Fonksiyon Çalıştı Çalışan func:" + metin : " Fonksiyon Çalışmadı" ) + " Sonuç = " + final);