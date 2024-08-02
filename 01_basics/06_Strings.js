const firstName = "shubham"
const lastName = "byadagi"

console.log(`Hi my firstname is ${firstName} and my lastName in ${lastName}`);

const Name1 = new String("shubham")
console.log(typeof Name1);
console.log(firstName.length);
console.log(Name1.length);
console.log(Name1.toUpperCase());
console.log(Name1.charAt(2));

console.log(Name1.substring(1,4));
console.log(Name1.slice(-4,6));

//remove whitespace we use trim
const trimVariable = " shubham       "
console.log(trimVariable);
console.log(trimVariable.trim());

const Url = "https://shubham.com/shub%200byadagi"
console.log(Url.replace('%200','-'));
console.log(Url.includes("rahul"));

const SplitVariable ="shub-ham-byadagi"
console.log(SplitVariable.split('-'));

