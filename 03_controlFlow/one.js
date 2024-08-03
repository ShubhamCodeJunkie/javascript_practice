if (2 == "2") {
  console.log(
    "this will get execute == compare value only so if condition get true"
  );
}

if (2 === "2") {
  console.log(
    "this will not get execute === compare value and datatype so if condition get false"
  );
}

const temp = 41;
if (temp < 50) {
  console.log("temperature less than 50");
} else {
  console.log("temperature more than 50");
}

if(temp>10) console.log("implicite without using flower ");

//if else if else if else
//&& both true then enter into loop
//|| any one true enter into loop