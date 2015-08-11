// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

var Child = function(height, name, age) {
  this.height = height;
  this.name= name;
  this.age = age;
};

var Ride = function (minHeight, maxHeight) {
  this.minHeight = minHeight;
  this.maxHeight = maxHeight;
};

var c1 = new Child(10,"Bob", 12);
var c2 = new Child(20,"Betty", 15);
var r1 = new Ride(5,15);
var r2 = new Ride(15,25);

function tallEnough (child, ride) {
  if(child.height > ride.minHeight) {
    return true;
  } else {
    return false;
  }
}

console.log(tallEnough(c1, r1));
