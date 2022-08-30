/*
Main Methods
> length
> indexOf
> concat
> replace
> split
> toLowerCase
> trim
> substr
*/

// Template string : `${variable}`

console.log('\n')
console.log("#### Template ####",'\n')

let hunsband = 'RATARCA'
let wife = 'Gabi'

console.log(`${hunsband} ${wife}`)

// string vs String Object
console.log('\n')
console.log("#### OBJECT  ####",'\n')

let s_string = "i'm a simple String";
let obj_string = new String("Powerful_String")

console.log(typeof s_string)  
console.log(typeof obj_string) //You can use a lot of many methods dot string object!

// Methods for string
console.log('\n')
console.log("#### METHODS ####",'\n')
// length:
let size = s_string.length // Property doesnt have invoke
console.log(size)

//indexOf: 
idx = s_string.indexOf('a')
console.log(idx)

//concat: 
let concat_string = s_string.concat('_MORE STRING')
console.log(concat_string)

//replace
let replace_string = s_string.replace('simple','not-simple')
console.log(replace_string)

// split
let split_string = s_string.split(' a simple ')
console.log(split_string)

// toLowerCase
let lower_string = s_string.toLowerCase()
console.log(lower_string)

// trim
let trim_string = s_string.trim()
console.log(s_string)

// substr