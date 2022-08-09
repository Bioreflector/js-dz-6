// Task 12 understand the Constructor Property
function Dog(name) {
    this.name = name;
  }
  function joinDogFraternity(candidate) {
     return candidate.constructor === Dog
  }