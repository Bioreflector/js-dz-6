// Task 4 make Code More Reusable with the this Keyword
let dog = {
    name: "Spot",
    numLegs: 4,
  };
  dog.sayLegs = function(){
      return `This dog has ${this.numLegs} legs.`
    }
   dog.sayLegs()