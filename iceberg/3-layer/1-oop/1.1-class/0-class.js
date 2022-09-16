/*
  Class is a syntactic sugar for prototype constructions
*/
class Employee{
  constructor(name, salary){
    this.name   = name
    this.salary = salary
  }

  get fullName(){
    return `${this.name}`
  }

  set modifySalary(value){
    this.salary = value
  }

  raiseSalary(percent){
    this.salary *= 1 * percent/100
  }
}

const ratarca = new Employee('ratarca',1000)

console.log(typeof ratarca, ratarca.name, ratarca.salary)