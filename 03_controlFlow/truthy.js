const userEmail = "smbyada.ai"

if(userEmail)       //if something there in string its true and if its empty then false
{
    console.log("Got user email");
    
}else{
    console.log("Dont have user email");
    
}
const userEmail1 = ""

if(userEmail1)       
{
    console.log("Got user email");
    
}else{
    console.log("Dont have user email");
    
}

// falsy value
// false ,0,-0,bigint 0n,null,undefined,NaN

//truthy value
//"0","false"," ",[],{},function(){}  all empty array,object,function consider as truthy value

//check object empty condition with if
const MyObj = {}
if(Object.keys(MyObj).length === 0)
{
    console.log("myobj is empty");
    
}

//Nullish Coalescing Operator(??):null undefined
let val1;
//val1 = 5 ?? 10   //output is 5
//val1 = null ?? 10  //output is 10
//val1 = undefined ?? 15

val1 = null ?? 90 ?? 70

console.log(val1);


//terniary operator

//condition ? true : false

const icedteaprice = 200
icedteaprice >= 100 ? console.log("more than 100") : console.log("less than 100");

