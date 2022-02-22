var student = "Rahul";

var student = {
  name: "Raj",
  city: "Banglore",
  phone: 999999999,
};

console.log(student);
//Accessing a particular Property
console.log(student.city);

//Inserting new Property
student.email = "Raj@gmail.com";
console.log(student);

//updating the existing property
student.city = "Indore";
console.log(student);

student.state = "MP"; // insertion

student.name = "Ajay"; // updation

delete student.phone;
console.log(student);
