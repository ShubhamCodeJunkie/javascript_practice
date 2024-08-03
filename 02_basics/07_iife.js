//Immediately invoked function expressions

//name iife
(function chai() {
  console.log("hello world");
})();

//arrow iife
(() => {
  console.log("hello world");
})();

//arrow iife with parameter
((name) => {
  console.log(`my name is ${name}`);
})('shubham');
