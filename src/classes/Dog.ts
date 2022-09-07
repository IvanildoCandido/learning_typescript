interface Animal {
  _breed: string;
}

interface Dog extends Animal {
  _name: string;
  _age: number;
  dogSay(sound: string): string;
}

class Dog {
  constructor(name: string, age: number, breed: string) {
    this._name = name;
    this._age = age;
    this._breed = breed;
  }
  dogSay(sound: string) {
    return `${this._name} da raça ${this._breed} tem ${this._age} anos e fala: ${sound}`;
  }
}

let dog1 = new Dog("Alex", 2, "Pastor Alemão");
console.log(dog1.dogSay("Receeebaaa!"));
