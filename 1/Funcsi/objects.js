let yunus = {

    name : " Yunus Emre",
    surname : "Alpak",
    bornyear : 2000,
    team : "lakers",
    single : true,
    favMusicians : ["Sezen","Güneş"],
    ageCalculate:  function() {
        this.age = 2023-this.bornyear;
        // we need use "this" in object
    }
}

let kerem = {

    name : " kerem Efe",
    surname : "Alpak",
    bornyear : 2008,
    team : "nets",
    single : true,
    favMusicians : ["uzi","azer"],
    ageCalculate:  function() {
        this.age = 2023-this.bornyear;
        // we need use "this" in object
    }
}



console.log(yunus);
console.log(yunus.bornyear);
console.log(yunus["bornyear"]);

yunus.ageCalculate();
console.log(yunus.age);

let bros = [yunus , kerem];

//other

let yasin = new Object();
yasin.name = "yasin";