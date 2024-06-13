// "use strict"; // treat all JS code as newer version 

// // alert( 3 + 3) // we are using nodejs, not browser

// console.log(3 + 3) 
// console.log("Sidhant")


// let name = "Sidhant"
// let age = 12
// let isLoggedIn = false

// // number => 2 to power 53
// // bigint
// // string
// // boolean
// // null
// // undefined
// // symbol
// // object


// console.log(typeof null); // object

// Primitive 

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// reference type(Non primitive)

// Array, Objects, Functions, 



// const id = Symbol('123')
// const anotherId = Symbol('123')



// const bignumber = 3456788909


// const heros = ["shaktiman", "naagraj", "doga"]
// {
//     name: "Sidhant",
//     age: 25,
// }


// const myFunction = function(){
//     console.log("Hello world");
// }



// Memory : Stack(Primitive), Heap(non-Primitive)


let myYoutubename = "Sidhantvlogs"

let anotherName = myYoutubename
anotherName = "DonSidhantchannel"

console.log(anotherName);
console.log(myYoutubename);


let userOne = {
    email: "sid@google.com",
    upi: "skadobaby"
}

let userTwo = userOne

userTwo.email = "mybaby@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);