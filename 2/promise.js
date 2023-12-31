const members = [

    {name : "Yasin" , surname : "Alpak"  , role: "Baba"},
    {name : "Hale" , surname : "Alpak"  , role: "Anne"},
    {name : "Yunus" , surname : "Alpak"  , role: "Büyük Çocuk"},
    {name : "Kerem" , surname : "Alpak"  , role: "Minik Çocuk"},
]

membersGetter = () => {

    setTimeout( () => {
        let result = '';
        members.forEach(member => {
            result += `
            <h2>${member.name}:</h2>
            <li>${member.surname}</li>
            <li style="color:red;">${member.role}</li>
            `
        })
        document.body.innerHTML = result;
    },1000);

}

memberAdder = (member ) => {

    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            
            members.push(member);
            
            let err = true;
            if (!err) resolve();
            else reject("Bir aksilik yaşandı :(");
            

        },3000);
    })


}

memberAdder({name : "Mina" , surname : "Alpak"  , role: "Mini Minik Çocuk"}).then(membersGetter).catch(err => {console.log(err);});


setTimeout(() => {
    memberAdder({name : "Ege" , surname : "Alpak"  , role: "Mini Mini Minik Çocuk"}).then(membersGetter).catch(err => {console.log(err);});
    
},5000);

membersGetter();