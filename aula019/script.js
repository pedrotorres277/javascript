// const cars = ["Ferrari", "Gol", "Uno", "Tesla", "Mercedes"]

// // for (let i = 0; i < cars.length; i++) {
// //   console.log(cars[i]);
// // }
// for (let car of cars){
//     console.log(car)
// }
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const person1 = new Person("Pedro", "Silva", 18);
console.log(`Seja Bem Vindo ${person1.firstName} ${person1.lastName}`);

const person2 = new Person("Matheus", "Pereira", 23);
console.log(person2);

person1.getFullName();

let items = document.querySelector(".items");
// items.remove(0);

items.children[0].remove();
items.children[0].innerHTML = `<li>Item 2 <em><strong>modificado</strong></em></li>`;
