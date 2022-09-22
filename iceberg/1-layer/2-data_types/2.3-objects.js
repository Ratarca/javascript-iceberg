/*
Array Basic
Objects are key/value
*/

// Array
let some_array = [1,2,3,4,'another',[5,6,7]]
console.log(some_array,'||',some_array[1],'\n')

// Object
let study_degree = 'Master Degree'

const some_object = {'name':'ratarca',
                'age':27, 
                'icome': 1200,
                'nested_object':{'another':1},
                'study_level':study_degree
              }

console.log(some_object, '\n',  some_object.name, '\n', some_object.nested_object.another)