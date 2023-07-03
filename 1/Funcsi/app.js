//Funcs

//Basic Func 

sayHi();

function sayHi() {

    console.log("Hiii");

}

//Variables Func

additionNumber(10,20);

function additionNumber (x,y){
    console.log((x+y));
}


//return

let toplam = topla(10,20);

function topla(x,y){
    return x+y;
}

console.log(toplam)

//ex

aralıktaTopla(10,20);

function aralıktaTopla(x,y) {

    let toplam = 0;
    for(let i=x ; i<=y ; i++){
        toplam += i;
    }
    console.log(toplam)
}