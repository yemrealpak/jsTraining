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

memberAdder = (member , callback) => {

    setTimeout(() => {
        members.push(member);
        callback();
    },3000);
}

memberAdder({name : "Mina" , surname : "Alpak"  , role: "Mini Minik Çocuk"} , membersGetter);


setTimeout(() => {
    memberAdder({name : "Ege" , surname : "Alpak"  , role: "Mini Mini Minik Çocuk"} , membersGetter);;
    
},5000);

membersGetter();