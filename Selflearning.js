function myFirstFunction(firstName, surname) {
  console.log("Hello " + firstName + surname);
}

myFirstFunction("Shantanu ", "Narayen ");
myFirstFunction("Richard", " Darby");
myFirstFunction(" Sundar ", "Pichai");

function calculateName(firstname, surname) {
  return firstname + " " + surname;
}
let customerName = calculateName("Sundar", "Pichai");
console.log(customerName);

function addThreeNumbers(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  return sum;
}
let answer1 = addThreeNumbers(1, 3, 5);
console.log(answer1);
