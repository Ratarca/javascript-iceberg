let person = {person_name:"RATARCA",
                age:28,
                raiseAge: function(percent){
                  this.age = this.age * (1+ percent/100)
                  return this.age
                }
}

console.log(person.age, person.raiseAge(100))