const bitkiler = [
    {ad: "domates" , tur: "meyve"},
    {ad: "roka" , tur: "sebze"},
    {ad: "marul" , tur: "sebze"},
    {ad: "muz" , tur: "meyve"},
    {ad: "üzüm" , tur: "meyve"}
];
const sebzeler = bitkiler.filter(function(element){
    return element.tur === "sebze";
})
const meyveler = bitkiler.filter(function(element){
    return element.tur === "meyve";
})

/* for (let index = 0; index < bitkiler.length; index++) {
    const element = bitkiler[index].tur;

    if(element == "sebze"){
        sebzeler.push(bitkiler[index])
    }
    else{
        meyveler.push(bitkiler[index])
    }

} */



console.log(sebzeler);
console.log(meyveler);