// Task 13 change the Prototype to a New Object
function Dog(name) {
    this.name = name;
  }
  Dog.prototype = {
    numLegs: 4,
    eat: function(){
      console.log('nom nom nom')
    },
    describe: function(){
      console.log(`My name is ${this.name}`)
    }
  };