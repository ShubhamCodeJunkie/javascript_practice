let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let bdayDate = new Date(1995,7,25)  // months start with zero index
let bdayDate1 = new Date("1995-08-25")  
let bdayDate2 = new Date("08-25-1995")  
console.log(bdayDate.toDateString());
console.log(bdayDate1.toDateString());
console.log(bdayDate2.toDateString());



let myCreateddate= new Date(1995,7,25,16,45,10)
console.log(myCreateddate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateddate.getTime());

console.log(Math.floor(myTimeStamp/1000));


console.log(bdayDate.getMonth() + 1) //index start with zdro
console.log(bdayDate.getDay()); //mon 1 tue 2 wed 3 

console.log(
 bdayDate.toLocaleString('default',{
    weekday:"long",
    day:"numeric",
    month:"short"

}))

 
