// # primitive

// 7 types : String , number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue  = 100.3

const isLogggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 32644215664565468465n



// Refrence (Non primitive )

// Array, Objects, Functions

const heros = ["shaktiman","nargraj","doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myfunction =function(){
    console.log("Hello World ");
}

console.log(typeof heros );     




// ++++++++++++++++++++++++++++++++++++++++++


// Stack (primative), Heap (Non-premitive)

let myyoutubename = "rushikumawat.com"

let anothername = myyoutubename
anothername = "chaiaurpoonam"

console.log(myyoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email ="ponam@rushi.com"

console.log(userOne.email);
console.log(userTwo.email);
