// Ambiance > Dancer > SpinDancer

var SpinDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.spinAngle = 0;
  this.spinSpeed = Math.random() * 90;

};
SpinDancer.prototype = Object.create(Dancer.prototype);
SpinDancer.prototype.constructor = SpinDancer;

SpinDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.spin();
};
SpinDancer.prototype.spin = function(){
  // console.log(this.spinSpeed);
  this.spinAngle += this.spinSpeed;
  this.node.style.webkitTransform = "rotate(" + this.spinAngle+"deg)";
  this.node.style.borderRadius = '1px';
  this.node.style.borderWidth="10px 10px 10px 10px"
};