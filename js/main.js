// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});


var child = {
  height: 3,
  name: "Julian",
  age: 3
};

var child2 = {
  height: 4,
  name: "Cero",
  age: 4
};

var ride = {
  minHeight: 3,
  maxHeight: 7
};

var ride2 = {
  minHeight: 4,
  maxHeight: 7
};


function tallEnough (child, ride) {
  if (child.height >= ride.minHeight) {
    return true;
  } else {
    return false;
  }
}

console.log(tallEnough(child, ride));
