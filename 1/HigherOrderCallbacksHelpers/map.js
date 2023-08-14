let numbers = [1,2,3,4,5,6];

let newNumbers = numbers.map(function (index) {
    return index*2;
})

console.log(numbers);
console.log(newNumbers);

//travvelling all indexs and can do some methods

const persons = [
    {name : "John" , age: 20},
    {name : "Harry" , age: 26},
    {name : "Julia" , age: 35},
]

const personsAge = persons.map(function (index) {
    return index.age;
})

console.log(personsAge);

const mergeParams = persons.map((index)=>index.name + " is " + index.age + " years old.")

mergeParams.forEach( (index) => {
    console.log(index);
})