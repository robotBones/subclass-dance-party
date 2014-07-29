// Ambiance > Dancer
var Dancer = function(top, left, timeBetweenSteps){

  Ambiance.call(this);

  this.$node = $('<span class="dancer"></span>');
  this.node = this.$node[0];
  this._timeBetweenSteps = timeBetweenSteps;
  this._top;
  this._left;

  this.step();
  this.setPosition(top, left);
};
Dancer.prototype = Object.create(Ambiance.prototype);
Dancer.prototype.constructor = Ambiance;

Dancer.prototype.step = function(){

  var thisDancer = this;
  // checking the state of a foreign object seems like a bad idea and a crime against encapsulation.
  if (SubclassDanceParty.lineUp === true){
    thisDancer.lineUp();
  }

  setTimeout(function(){

    thisDancer.step();

  }, thisDancer._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){

  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
  this._top = top;
  this._left = left;

  //this.avoid();
};

Dancer.prototype.lineUp = function(top, left){
  var dancer;
  var newTop = 0;
  var newLeft = 0;
  var mod = 0;
  var midpoint = screen.width/2;
  for (var i = 0; i < window.dancers.length; i++){
    dancer = window.dancers[i];

    if (dancer._left - midpoint > 3){
      mod = -1;
    } else if(dancer._left - midpoint < -3){
      mod = +1;
    }

    newTop = dancer._top;// + mod;
    newLeft = dancer._left + mod;
    dancer.setPosition(newTop, newLeft);
  }
};
// // called from seetPosition
// Dancer.prototype.avoid = function(){
//   for (var i = 0; i < window.dancers.length; i++){
//     dancer = window.dancers[i];

//     // form an array of surrounding dancers
//     var nearbyDancers = [];
//     var breadth = 3;
//     var someDancer;
//     var index = breadth;
//     while (!window.dancers[i - index] && index <= 3) {
//       someDancer = window.dancers[i-index];
//       if (somedancer === dancer){
//         index++;
//       } else {
//         nearbyDancers.push(someDancer);
//         index--;
//       }
//     }
// };

// function isColliding(dancer, other){
//   var x = Math.abs( dancer._left - other._left );
//   var y = Math.abs( dancer._top - other._top );
//   var distanceBetween = Math.sqrt( Math.pow(x,2) + Math.pow(y,2) );
//   console.log(distanceBetween);
// }
