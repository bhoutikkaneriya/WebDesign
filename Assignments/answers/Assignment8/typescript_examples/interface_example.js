//Simple interface
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hello"; }
};
document.getElementById('simple_interface').innerHTML = customer.sayHi() + " " + customer.firstName + " " + customer.lastName;
var SoftwareDeveloper = {};
SoftwareDeveloper.age = 27;
SoftwareDeveloper.jobTitle = "Java Developer";
document.getElementById('interface_inheritance').innerHTML = "Age: " + SoftwareDeveloper.age + " " + " and Job Title: " + SoftwareDeveloper.jobTitle;
function validate() {
    var age = document.getElementById("age").value;
    var jobTitle = document.getElementById("jobTitle").value;
    document.getElementById("form_values").innerHTML = "Age: " + age + " " + " and Job Title: " + jobTitle;
}
//# sourceMappingURL=interface_example.js.map