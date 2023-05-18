const move_name = ["Sherlock HOlmes", "Home alone", "tresure irland"];
const map2 = move_name.forEach((element) => {
  //   console.log(element);
});

const my_friends = ["Jey", "Nadir", "Alex"];
const my_friends_collect = my_friends.map((a) => console.log("hello:" + a));

const sort_method = [1, 6, 7, 8, 3, 4, 5, 6];
// console.log(sort_method.sort());

const filter_method = [1, 6, 7, 8, 3, 4, 5, 6];
const result = filter_method.filter((value_number) => value_number > 3);
console.log(result);

// let a=0
for (let index = 1; index < 11; index++) {
  console.log(index + " a");
}
const prime_method2 = [1, 6, 7, 8, 3, 4, 5, 6, 11];

const result2 = prime_method2.filter((value_number) => value_number % 2 === 1);
console.log(result2);
const result3 = prime_method2.filter((value_number) => value_number % 2 === 0);
console.log(result3);
