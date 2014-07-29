var Ambiance = function(){

  var moods = ['excited', 'chill', 'aversive', 'friendly'];

  // later set _mood to set states associated to a dance floor.
  var randMood = Math.floor(Math.random) * moods.length;
  if (randMood === moods.length){
    randMood -= 1;
  }
  this._mood = moods[randMood];
};
Ambiance.prototype.getVibe = function(){
  return this._mood;
};
