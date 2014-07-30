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
};

Dancer.prototype.lineUp = function(top, left){
  var dancer;
  var newTop = 0;
  var newLeft = 0;
  var mod = 0;

  for (var i = 0; i < window.dancers.length; i++){
    dancer = window.dancers[i];

    if (dancer._left > 20){
      mod = -1;
    } else if(dancer._left < 20){
      mod = +1;
    }

    newTop = dancer._top;// + mod;
    newLeft = dancer._left + mod;
    dancer.setPosition(newTop, newLeft);
  }
};
