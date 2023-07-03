//fat Arrow

function selamVer(){
    console.log("Merhaba");
}

selamVer();

const selamVerVar = function (){
    console.log("MerhabaVar");

}

selamVerVar();

const fatArrow = _ => {
    console.log("Selam arrow")
}

// () if empty , can use "_"

fatArrow();

const kareAl = sayi => sayi*sayi;
    

//if just 1 block using , dont need {} (dont use return)

//if use just one variables in () , not need use it

console.log(kareAl(2));

const sayıTopla = (x,y) => x+y;
console.log(sayıTopla(2,5));