let animal = {
  eats: "milk",
};
let cat = {
  jumps: true,
};

cat.__proto__ = animal;
console.log(animal.eats);
