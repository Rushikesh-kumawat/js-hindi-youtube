// const userEmail = []

// if (userEmail){
//     console.log("got user email");
// }else {
    // console.log("not have user email ");
    
// }

// false value 
// false , 0, -0, BigInt On, "", null , undefined ,NaN

// truthy value
// "0", 'false', " ", [], {}, function(){}, 


// if (use

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty" );
}

// Nullish  Coalesing Operator (??) null undefined  

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20




console.log(val1); 




//terniary operater 

// Condition ? true : false node 04_control_flow/truthy.js

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log
("more than 80")