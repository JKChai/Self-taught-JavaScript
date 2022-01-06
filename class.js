// CONSTRUCTOR
class Polygon {
    constructor(...sides) {
      this.sides = sides;
    }
    // Method
    *getSides() {
      for(const side of this.sides){
        yield side;
      }
    }
  }
  
const pentagon = new Polygon(1,2,3,4,5);

console.log([...pentagon.getSides()]); // [1,2,3,4,5]

// Binding this in method & static properties
class Animal {
    speak() {
      return this;
    }
    static eat() {
      return this;
    }
  }
  
let obj = new Animal();
console.log(obj.speak()); // the Animal object
let speak = obj.speak;
console.log(speak()); // undefined

console.log(Animal.eat()); // class Animal
let eat = Animal.eat;
console.log(eat()); // undefined


// PUBLIC field declaration
class Rectangle {
    height = 0;
    width;
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

// PRIVATE field declaration
class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }
  }
  
