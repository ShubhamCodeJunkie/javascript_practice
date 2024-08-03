let myArr = [1,2,3,4,5,6,7]
let fruits = ["apple","banana","mango"]
//console.log(myArr[2]);


let myArr1 = new Array(2,3,4,5,66,4)
//console.log(myArr1[2]);

// array methods
//myArr.push(9); // add value to array at end
//myArr.push(8)
//console.log(myArr);
//myArr.pop() // delete last value in array
// myArr.unshift(9)  //add value at zero index
// console.log(myArr);
// myArr.unshift(10)
// console.log(myArr);
// myArr.shift()
//console.log(myArr);

//console.log(myArr.includes(6)); //return true or false based on value present in array or not
 
// console.log("A ",myArr);

// let SliceArray = myArr.slice(2,5); //doesnt change original array
// console.log("B ",SliceArray);
// console.log("A ",myArr);

// let SpliceArray = myArr.splice(2,5);  //splice change original array ,
// console.log("C ",SpliceArray);
// console.log("A ",myArr)

let fruits1 = ["apple","banana","mango"]
let fruits2 = ["guava","pomegranate","papaya"]

//fruits1.push(fruits2);
//console.log(fruits1[3][1]);

//let fruits3 = fruits1.concat(fruits2)  //multiple array can add using concat and spred opertor
//console.log(fruits3);

// let fruits4 = [...fruits1,...fruits2]
// console.log(fruits4);

// const Array2 = [1,2,3,[4,5,5,[4,6,7],5,5,6,[6,7]]]
// const array3 = Array2.flat(Infinity)
// console.log(array3);


console.log(Array.isArray("shubham"));
console.log(Array.isArray(myArr));
console.log(Array.from("shubham")); //convert values in array 

let score1 = 100
let score2 = 200
let score3 = 500
console.log(Array.of(score1,score2,score3));


