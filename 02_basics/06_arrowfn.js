const user = {
  username: "shubham",
  price: 9999,

  welcomeMessage: function () {
    console.log(`${this.username} ,welcome to website`); //this refer to current context or current object without using this it throw undefined error
  },
};

user.welcomeMessage();
user.username = "rahul";
user.welcomeMessage();

function chai() {
  const username = "shubham";
  console.log(this.username); // this work with object not function it will give undefined result
}

chai();

//arrow

const chai2 = () => {
  let username = "rahul";
};

const addTwo = (num1, num2) => {
  return num1 + num2;
};

const addtwo = (num1, num2) => (num1 + num2); // when we use () no need write return keyword but used when flower bracket used

console.log(addTwo(2, 5));
console.log(addtwo(2, 5));

const Objectreturn = () => ({ username: "shubham" });
console.log(Objectreturn());
