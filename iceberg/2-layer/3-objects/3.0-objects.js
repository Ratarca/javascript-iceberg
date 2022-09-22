/*
Objects are a collection with key and value below his syntax

let object_dummy = {key1: value1, ..., keyN: valueN}

The most important methods inside objects are:
> delete object_name.propriety
> get => object_name.propriety | object_name['propriety']
> set => object_name.propriety = val | object_name['propriety'] = val

for in 

*/

let customer = {
  user_id : 00,
  cpf : 0102030405,
  name : "RATARCA",
  gender : "MascuLiNO",
  age : 30,
  error:true,
  address :{city:"sp",country:"brazil"}
};

// delete customer.error
console.log(customer.error);

// for...in
for(val in customer){
  console.log(val, customer[val]);
};