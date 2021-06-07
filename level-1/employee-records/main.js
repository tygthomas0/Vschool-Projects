var employees = [];

function Employee(name, title, salary) {
    this.name = name;
    this.jobTitle = title;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function() {
        console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: $" + this.salary + "/year, Status: " + this.status);
    }
}

var jerry = new Employee("Jerry", "Student", 0);
var carl = new Employee("Carl", "Instructor", 50000);
var larry = new Employee("Larry", "Web Developer", 96000);

carl.status = "Part Time";

jerry.printEmployeeForm();
carl.printEmployeeForm();
larry.printEmployeeForm();

employees.push(jerry);
employees.push(carl);
employees.push(larry);