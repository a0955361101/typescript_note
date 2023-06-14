interface PersonInfo {
  name: string;
  age: number;
  hasPet: boolean;
}

let maxwell: PersonInfo = {
  name: "Maxwell",
  age: 20,
  hasPet: false,
};

let martin: PersonInfo = {
  name: "Martin",
  age: 24,
  hasPet: true,
};

let toby: PersonInfo = {
  name: "Toby",
  age: 32,
  hasPet: false,
};

interface PersonInfo1 {
  name: string;
  age: number;
  hasPet: boolean;
  printInfo(): void;
}

// let maxwell2:PersonInfo = {
//   name:'Maxwell',
//   age:20,
//   hasPet:false,
//   printInfo(){
//     console.log(`
//     Name:${this.name}
//     Age:${this.age}
//     Owns a pet? ${this.hasPet}
//     `)
//   }
// }
