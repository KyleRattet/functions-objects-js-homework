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


var truck = new Car(10, 20);
var sedan = new Car(30, 10);
var boulder = new Route(50, "Folsom", "Boulder, CO");
var coloSprings = new Route (75, "Garden", "CS, CO");

function enoughGas (car, route) {
  if ((car.mpg*car.gallons) > route.miles) {
    return true;
  } else {
    return false;
  }

}
console.log(enoughGas(truck,boulder));
