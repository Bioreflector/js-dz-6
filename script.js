// Task 23 use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  let glideMixin= function(obj){
    obj.glide = function(){
      console.log('Gliding, wooosh!')
    }
  }
  glideMixin(bird)
  glideMixin(boat)
  bird.glide()
  boat.glide()



