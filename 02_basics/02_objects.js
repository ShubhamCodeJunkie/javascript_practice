//Object literals


const mySym = Symbol("key1")
const jsUser = {
    name:"shubham",
    "full name":"shubham byadagi",
    [mySym]: "mykey1",   //square used to represent symbol variable
    age:23,
    location:"Bangalore",
    email:"smbya@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","Friday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "shubh@chatgpt.com"
//console.log(jsUser);
//Object.freeze(jsUser)               //stop changing arraay without throwing any array
jsUser.email = "shubh@microsoft.com"
//console.log(jsUser);


jsUser.greeting = function()
{
    console.log("welcome to JS world");
    
}
jsUser.greeting2 = function()
{
    console.log(`welcome to JS world ${this["full name"]}` );
    
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
jsUser.lastname = "byadagi"

console.log(jsUser);




