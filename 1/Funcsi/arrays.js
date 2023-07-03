//Arrays
let arabaMarkalari = ["Ford","Reno","Honda"];

console.log(arabaMarkalari.toString());

console.log(arabaMarkalari[1]);
console.log(arabaMarkalari[3]);

arabaMarkalari[3] = "Audi";
console.log(arabaMarkalari[3]);

console.log(arabaMarkalari.length);

for(let eleman of arabaMarkalari){
    console.log(eleman);
}

//can keep different variables typse in a array

let array = [1 , "selam" , true];

for(let eleman of array){
    console.log(eleman);
}

//toString : to string (add ",")
console.log(arabaMarkalari.toString());

//join changes seperator
console.log(arabaMarkalari.join("---"));

//push : add variables on last
arabaMarkalari.push("BMW")
console.log(arabaMarkalari.join("-"));

//pop : delete last variable
arabaMarkalari.pop()
console.log(arabaMarkalari.join("-"));

//shift : delete first variable
arabaMarkalari.shift()
console.log(arabaMarkalari.join("-"));

//unshift : add variable first index
arabaMarkalari.unshift("Ford")
console.log(arabaMarkalari.join("-"));

//! look like shift key __>

//delete : working with index , after index will be undefined
delete arabaMarkalari[1];
console.log(arabaMarkalari.join("-"));

//splice : 

let numbers = [1,2,3,4,5,6,7,8,9];
numbers.splice(numbers.length,0,10,11)
console.log(numbers.join("-"));

numbers.splice(0,numbers.length,1,2,3,4)
console.log(numbers.join("-"));

//concat : merge 2 array

let x = [1,3,5];
let y = [2,4,6];

let z = x.concat(y);

console.log(z.join())

//EX
console.log(numbers.join());

let k = numbers.slice(0,3);
console.log(numbers.join());
console.log(k.join());




