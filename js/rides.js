// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

//Constructor
var Child = function (height, name, age) {
  this.height = height;
  this.name = name;
  this.age = age;
};

var Ride = function (minHeight, maxHeight) {
  this.minHeight = minHeight;
  this.maxHeight =maxHeight;
};

//instances
var child = new Child (36, "Tony", 5);


var child2 = new Child (40, "Sally", 7);


var ride = new Ride (30, 50);


var ride2 = new Ride (41, 50);


function rightSize (child, ride) {
  if (child.height >= ride.minHeight && child.height <= ride.maxHeight) {
    return true;
  } else {
    return false;
  }
}

console.log(rightSize(child, ride));
console.log(rightSize(child2, ride2));
