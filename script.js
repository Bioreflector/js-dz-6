// Task 11 iterate Over All Properties
function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;
  const beagle = new Dog("Snoopy")
  
  const ownProps = [];
  const prototypeProps = [];
  for(let property in beagle){
    if(beagle.hasOwnProperty(property)){
      ownProps.push(property)
    }
    else{
      prototypeProps.push(property)
    }
  }