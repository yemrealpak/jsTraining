// Döngü 

var kacKere = parseInt(prompt("Tekrar Sayısını Griniz = ?"));

do{
    var secim = parseInt(prompt("1-For , 2-While"))
}while(!(secim == 1 || secim == 2));

switch(secim) {
    case 1:
      alert("for")
      for(let i = 0 ; i<kacKere ; i ++){
        alert(i+1 + " kere seni seviyorum Sudiş")
      }
      break;
    case 2:
        let i = 0;
        alert("while")
        while(i<kacKere){
            alert(i+1 + " kere seni seviyorum Sudiş")
            i++;
        }
      break;
    default:
      
  }