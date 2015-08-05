$(document).on('ready', function() {
  // console.log('sanity check!');
});

//constructors
var Car = function (mpg, gallons) {
  this.mpg = mpg;
  this.gallons = gallons;
};


var Route = function (miles, destination, location) {
  this.miles = miles;
  this.destination = destination;
  this.location = location;
};

//instances
var truck = new Car (11, 5);
console.log(truck);

var sedan = new Car (20, 10);

var route = new Route (30, "LoDo", "Denver, CO");

var route1 = new Route ( 700, "MGM Grand", "Las Vegas, NV");


function miles (car, route) {
  if ((car.mpg*car.gallons) >= route.miles) {
    return true;
  } else {
    return false;
  }
}

console.log(miles(truck, route));
console.log(miles(truck, route1));

