let a = 300;
var b = 222; //global scope

if (true) {
  //local scope variable cant be used outside scope ,with var it acts differently
  let a = 400;
  var b = 2;
}

console.log(a);
console.log(b);

function One() {
  const userName1 = "shubham";
  function two() {
    const password1 = "paswww";
    console.log(userName1);
  }

  // console.log(password1); // password1 one cant access here beacuuse its within scope of two function
}

//console.log(userName1); //userName1 one cant access here beacuuse its within scope of one function it will throw error

///calling output before function declaration

console.log(Add1(4));

function Add1(num4) {
  //work with this kind of function declartion
  return num4 + 3;
}

console.log(Add2(4)); // doest work with fuction declared as expression
const Add2 = function (num5) {
  return num5 + 3;
};
