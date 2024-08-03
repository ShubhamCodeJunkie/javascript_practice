const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "shubham";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
  email: "smby@tinder.com",
  fullname: {
    userFullname: {
      firstName: "shubham",
      lastName: "Byadagi",
    },
  },
};

//console.log(regularUser.fullname.userFullname.firstName);

const obj1 = { a: "1", b: "2" };
const obj2 = { c: "3", d: "4" };
const obj4 = { e: "5", f: "6" };

const obj3 = Object.assign({}, obj1, obj2, obj4); //assing concat two or more objects
console.log(obj3);

const obj5 = { ...obj1, ...obj2, ...obj4 };
console.log(obj5);

//objects of array

let ObjectArray = [
  {
    name: "shubham",
    age: 22,
  },
  {
    name: "shubham",
    age: 22,
  },
  {
    name: "shubham",
    age: 22,
  },
  {
    name: "shubham",
    age: 22,
  },
];

console.log(ObjectArray[1].name);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

const { courseInstructor } = course;
console.log(courseInstructor);
const { courseInstructor: instrs } = course;
console.log(instrs);
