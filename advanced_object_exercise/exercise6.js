// //Evaluate these:
// //#1
// [2] === [2]
// {} === {}
// // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { a: 5 }; //5
object1.a = 4;

//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

class animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class mamal extends animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound() {
    console.log(
      `Moo! My name is ${this.name}, I am a ${this.type}, and my color is ${this.color}.`
    );
  }
}

const cow = new mamal("messi", "cow", "white and black");

cow.sound();

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
  annouce() {
    console.log(
      `halo my name is ${this.name}, my club is ${this.club}, celebration is ${this.celebration}`
    );
  }
}

const player = new champions(`ronaldo`, "al-nassr", "siuuuu!!");

player.annouce();
