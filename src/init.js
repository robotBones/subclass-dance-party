$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    // sorting to make collision detection easier;
    window.dancers.sort(function(a,b){
      return a._left - b._left;
    });
  });

  /////////////////////my code here///////////////////////

  // setting app nameSpace that stores background images and state
  if (window.SubclassDanceParty === undefined) {
    window.SubclassDanceParty = {
      danceFloors: ["HardParty.jpg", "ChillHill.png"],
      floor: 0,
      lineUp: false
    };
    SubclassDanceParty.background = $("body");
    SubclassDanceParty.background.css('background-image', 'url(./images/' + SubclassDanceParty.danceFloors[0]+')');

  }

  var changeBackground = function(floor){
    SubclassDanceParty.background.css('background-image', 'url(./images/' + SubclassDanceParty.danceFloors[floor]+')');
  }

  $('.changeBackground').on('click', function(){
    var floors = SubclassDanceParty.danceFloors.length;
    SubclassDanceParty.floor++;

    if (SubclassDanceParty.floor >= floors){
      SubclassDanceParty.floor = 0;
    }
    changeBackground(SubclassDanceParty.floor);
  });

  $('.lineUpLeft').on('click', function(){
    SubclassDanceParty.lineUp = true;
  });
});

