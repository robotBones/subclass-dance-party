// Ambiance > Dancer > FlickerDancer

var FlickerDancer = function(top, left, timeBetweenSteps, colorA, colorB){
  Dancer.call(this, top, left, timeBetweenSteps);
  this._colorA = colorA || 'blue';
  this._colorB = colorB || 'green';
  this._currentColor = this._colorA;
};
FlickerDancer.prototype = Object.create(Dancer.prototype);
FlickerDancer.prototype.constructor = FlickerDancer;
FlickerDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  if (this._currentColor === this._colorA){
    this._currentColor = this._colorB;
  } else if (this._currentColor === this._colorB){
    this._currentColor = this._colorA;
  }
  this.$node.css({ border: "10px solid "+ this._currentColor }, this._timeBetweenSteps, "swing");
}
