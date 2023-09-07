
  var five = require("johnny-five");
  var board = new five.Board();
  
  board.on("ready", function() {
    var proximity = new five.Proximity({
      controller: "HCSR04",
      pin: 12
    });
  
    proximity.on("data", function() {
      console.log("inches: ", this.inches);
      console.log("cm: ", this.cm);
    });
  });  