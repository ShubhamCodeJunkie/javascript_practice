//primitive get store in stack 
//non primitive get store in heap

let name1 = "shubham"
let name2 = name1
 name2 = "rahul"

console.log(name1);
console.log(name2);

let object1 = {
    name : "shubham"
}

let object2 = object1
object2.name = "rahul"

console.log(object1.name);
console.log(object2.name);

// in non primitive both poining to same reference thats value get change
//in privitive copy of value is provided hence no change in main value