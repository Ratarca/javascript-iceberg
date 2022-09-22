let data = [2,3,4,5]

let simple_data = [1,2,3,data]
let spread_data = [1,...data]

console.log(simple_data)
console.log(spread_data)

// Copy object
let data_copy = [...data]

// Concat two array
let data_concat = [...data, ...data]

// Use within math operations! like Math.max()
// Use on Function

function build_polynom(val,a,b,c,d){
  return val*a + val*b + val*c + val*d
}

console.log(build_polynom(10,...data))
