const userEmail = "sidhant@hotmail.com"

if (userEmail) {
    console.log("Got user email");
} else{
    console.log("Dont have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// Truthy values

// [], "0", "false", " ", {}, function(){} 

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);