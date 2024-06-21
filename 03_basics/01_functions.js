// function addTwoNumbers(number1, number2){
//     if(username === undefined){
//        console.log("Please enter a username");
//     }
//     let result = number1 + number2
//     return result
// }


// const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//      }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())


function calculateCartPrice(...num1){
    return num1

}

// console.log(calculateCartPrice(511, 5733, 19070412))

const user = {
    username: 'Sidhant',
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]

}

console.log(returnSecondValue(myNewArray));