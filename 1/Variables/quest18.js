// ebob

var x = parseInt(prompt("1.Sayı Giriniz= ?"));
var y = parseInt(prompt("2.Sayı Giriniz= ?"));


var ebob = 0;


if(x>y){
    
    for(let i = 0 ; i<=y ; i++){
        if( y%i == 0 && x%i == 0){
            console.log("girdi" + i)
            ebob = i;
            console.log("ebob = " + ebob);
        }
    }

}
else{
    for(let i = 0 ; i<=x ; i++){
        if( y%i == 0 && x%i == 0){
            console.log("girdi" + i)
            ebob = i;
        }
    }
}

alert("Ebob = " + ebob);