let car = {
  color: "black",
  engine: null,
  power() {
    this.engine = 400;
  },
};
car.color = "green";
car.power();
// console.log(car); result green
// console.log(car); result { color: 'green', engine: 400, power: [Function: power] }

// tast2

let fruits = {
  pears: 10,
  apple: 30,
};
// console.log(fruits.pears + fruits.apple); result 40
let myName = {
  name: "Robiya",
};
// if (myName.name === "Robiya") {
//   console.log("Hello " + myName.name);
// } else {
//   console.log("there is no such name");
// }
// result Hello Robiya

let argumentName = {
  apple: "red",
  orage: 2,
};
// console.log(typeof(argumentName.apple)); resutl "string"
let arr = [1, 2, 3, 34, 5];
// if (arr[1] % 2 === 0) {
//   console.log("this number prime ");
// } else {
//   console.log("this number not prime ");
// }
// result "this number prime"
