$(document).ready(function() {
  var thermostat = new Thermostat();

  function getTemp() {
  $("#temp").text(thermostat.temperature());
  }

  $("#temp").text(thermostat.temperature());

  $("#temp-up").on("click", function() {
    thermostat.up();
    getTemp()

  });

  $("#temp-down").on("click", function() {
    thermostat.down();
    getTemp()

  });

  $("#resetbt").on("click", function() {
    $("#resetbt").html(thermostat.reset());
    getTemp()

  });

  $("#power").on("click", function(){
    $("#power").html(thermostat.modeSwitch());
    $("#power").css("background-color", "pink");
    getTemp()
  });



});
