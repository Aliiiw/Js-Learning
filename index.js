function greet() {
  console.log("hiii");
}

function greet(name) {
  console.log("hiii" + name);
}

greet();
greet("ali");

function square(number) {
  return number * number;
}

let numberSquared = square(2);
