
let numbers = [1,2,3];
//test
//first class funcs
const multipleTwo = (x) => x*2;

const dividedByTwo = (x) => x/2;

const plusTwo = (x) => x+2;

const arrayMethods = (array , func) => {
   // console.log(array)

    let tempArray = [];

    for (let index = 0; index < array.length; index++) {
        //console.log(array[index]);  
        tempArray[index] = func(array[index]);    
    }

    console.log(tempArray);
}

console.log(numbers);
//higher order functions : param = funcs or return funcs
arrayMethods(numbers,multipleTwo);
arrayMethods(numbers,dividedByTwo);
arrayMethods(numbers,plusTwo);
//callback func = params of higher order funcs
//ex :multipleTwo
