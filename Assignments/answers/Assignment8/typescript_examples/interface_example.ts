

//Simple interface

interface IPerson { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 

var customer:IPerson = { 
   firstName:"Tom",
   lastName:"Hanks", 
   sayHi: ():string =>{return "Hello"} 
} 

document.getElementById('simple_interface'). innerHTML = customer.sayHi() + " " + customer.firstName + " " + customer.lastName;



//Multiple Interface Inheritance


interface Person { 
   age:number 
} 

interface Employee extends Person { 
   jobTitle:string 
} 

var SoftwareDeveloper = <Employee>{}; 
SoftwareDeveloper.age = 27 
SoftwareDeveloper.jobTitle = "Java Developer" 
document.getElementById('interface_inheritance'). innerHTML = "Age: " +SoftwareDeveloper.age + " " + " and Job Title: " +SoftwareDeveloper.jobTitle ;




function validate(){
	
	var age = (<HTMLInputElement>document.getElementById("age")).value;
	var jobTitle = (<HTMLInputElement>document. getElementById("jobTitle")).value;

	document.getElementById("form_values").innerHTML = "Age: " +age + " " + " and Job Title: " +jobTitle ;
}
