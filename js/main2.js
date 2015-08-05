$(document).on('ready', function() {
  console.log('sanity check!');
});


var car = {
  milesPerGallon: 20,
  gallonsInTank: 3
};

var route = {
  miles: 200,
  destination: "Boulder",
  location: "Fancy Land"
};

function miles (car, route) {
  if ((car.milesPerGallon*car.gallonsInTank) >= route.miles) {
    return true;
  } else {
    return false;
  }
}


console.log(miles(car, route));
