  let numbers = [2,4,6,8];

  const funcTraveller = (eleman,index) =>{
        console.log(eleman,index+1)
  }

  numbers.forEach(funcTraveller);

  /*
  Dont use
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
  */


    const myForEach = (array,callback) => {

        for (let index = 0; index < array.length; index++) {
            callback(array[index],index);
        }
    }

    myForEach(numbers,function (eleman,index) {
        console.log("=> : "+eleman,index+1)
    })