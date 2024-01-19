//Evaluate these:
//#1
[2] === [2] // false
{} === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 4
const object2 = object1; // 4
const object3 = object2; // 4
const object4 = { a: 5}; // 5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class footballer {
  constructor(name, club, celebration) {
    this.name = name;
    this.club = club;
    this.celebration = celebration;
  }
}

class champions extends footballer {
  constructor(name, club, celebration) {
    super(name, club, celebration);
  }
  announce() {
    console.log(
      `Hello, my name is ${this.name}, my club is ${this.club}, and my celebration is ${this.celebration}`
    );
  }
}

const player = new champions("Ronaldo", "Al-Nassr", "Siuuuu!");

player.announce();

















// class Animal {
// 	constructor(name, type, color) {
// 		this.name = name;
// 		this.color = color;
// 		this.type = type;
// 	}
// }

// class Mamal extends Animal {
// 	constructor(name, type, color) {
// 		super(name, type, color)
// 	}
// 	sound() {
// 		console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
// 	}
// }

// const cow = new Mamal('Shelly', 'cow', 'brown');
