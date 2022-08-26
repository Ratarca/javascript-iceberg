function welcome(name){
  function style_welcome(){
    say = "Hello : "
    return say;
  };

  return style_welcome() + name;
};

function hypotenuse(a,b){
  function square(x) {return x*x}
  return Math.sqrt(square(a)+square(b));
};

console.log(welcome('RATARCA'))

// Tip: You can store your functions inside objects to call like this.