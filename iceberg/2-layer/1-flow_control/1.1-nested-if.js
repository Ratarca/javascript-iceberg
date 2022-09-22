/**
  Nested IF
 */

let age = 21;
let sex = "male";

if (age > 18 && sex.toLowerCase() === "male" ){
  console.log("You pay 18");
  }else{
    if (age <= 18 && sex.toLowerCase() === "male"){
      console.log("You cannot entry");
    }else{
      console.log("You are Female you dont pay");
  }
};

if (sex === "male"){
  
  if ( age > 18){
  console.log("\n","you are older")
}
};