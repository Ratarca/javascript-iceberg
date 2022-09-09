// For automate process to create a class in JS we use function to build a class

function Employee(name, salary){

  return{
    name: name,
    salary: salary,

    raiseSalary: function(percentage){
      this.salary *= 1 + (percentage/100)
    }

  };
};

let ratarca_employee = Employee("ratarca",100);
console.log(ratarca_employee.salary);

// Prototype: collects properties that are common to multiple objects
// Prototype object that holds the shared methods

const employeePrototype = {

  sayName: function(){
    console.log(this.name);
  }

}

function factoryEmployee(name,salary){
  const employee = {name, salary}
  Object.setPrototypeOf(employee, employeePrototype)
  return employee
}

// Constructors
let hoffa = new factoryEmployee('Hoffa',15000)
hoffa.sayName()