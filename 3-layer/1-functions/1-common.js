// Declarative Functions
function distance(x1,y1,x2,y2){
  dx = x2-x1;
  dy = y2-y2;
  return Math.sqrt(dx*dx + dy*dy)
};

// Recursion Function
function factorial(x){
  if (x <= 1) return 1;
  return x * factorial(x-1)
};

// Function expression
let square_variable = function square_line(size) {return size*size}


console.log( square_variable(10) )