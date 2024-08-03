//console.log(55 + null);

function MyName() {
  console.log("s");
  console.log("h");
  console.log("u");
  console.log("b");
  console.log("h");
}

//MyName()

function AddNumber(num1, num2) {
  return num1 + num2;
  console.log("testing"); //function stop at return next statement wont excecute
}

const result = AddNumber(33, 32);
//console.log("Result :",result);

function loginUserMessage(user) {
  if (!user) {
    //(user === undefined)
    console.log("please enter a username");
    return;
  }
  return `${user} just logged in`;
}

//console.log(loginUserMessage("shubham"));

//function with spread or rest operator

function CalculateCartprice(...num) {
  return num;
}

console.log(CalculateCartprice(3, 4, 5, 6, 7, 8));

function CalculateCartprice1(val1,valu2,value3,...num) {
    return num;
}

console.log(CalculateCartprice1(3, 4, 5, 6, 7, 8));

//objects with function
const user = {
    username:"shubham",
    price:2000
}

function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and its price is ${anyobject.price}`)
}

//handleObject(user);
handleObject({
    username:"Ram",
    price:434342
})

const ArrayN = [2324,42423]

function handleArray(anyarray)
{
    console.log(`first value ${anyarray[0]} and second value ${anyarray[1]}`);
    
}

handleArray(ArrayN)
handleArray([44,212])