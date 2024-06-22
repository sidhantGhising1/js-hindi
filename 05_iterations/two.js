const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentvalue) {
//     console.log(`acc: ${accumulator} and curr: ${currentvalue}`);
//     return accumulator + currentvalue
// }, 0)



// const myTotal = myNums.reduce ( (acc, curr) => acc + curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: "5"
    },
    {
        itemName: "py course",
        price: "10"
    },
    {
        itemName: "md course",
        price: "20"
    },
    {
        itemName: "data science course",
        price: "30"
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPrice);