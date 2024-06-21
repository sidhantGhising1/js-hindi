// const balance = 1000

// if (balance > 500) console.log("Correct answer baby");


const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allowed to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("You are logged in baby");
}