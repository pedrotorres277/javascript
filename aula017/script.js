// const person = { nome: "Pedro", idade: 20, nacionalidade: "Brasil" };

// console.log(`${person.nome}, ${person.idade} anos`);

// const names = ["Pedro", "Jorge", "Felipe", "Carlos", "Borel"];
// names.push("Eduardo");

// const sortedNames = names.sort();

// alert(names.indexOf("Jorge"));

// console.log(names);

const numbers = [1, 4, 2, 6, 3];
const numbersMultipliedByTwo = numbers.map(function (number) {
  return number * 2;
});
console.log(numbersMultipliedByTwo);

const ages = [8, 17, 50, 30, 22];

// const evenAges = ages.filter(function (age) {
//   return age % 2 === 0;
// });

const sumOfAges = ages.reduce(function (age, accumulator) {
  return accumulator + age;
}, 0);

console.log(sumOfAges);
