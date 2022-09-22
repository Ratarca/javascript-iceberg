function testBreak(x){
  let idx = 0;

  while(idx < x){
    console.log(idx, x);

    if(idx == x/2){
      break;
    };

    idx++
  };

  return idx
}

let cool = testBreak(100);
console.log('\n', cool)