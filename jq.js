$(document).ready(function() {
  var thermostat = new Thermostat();

  function getTemp() {
  $("#temp").text(thermostat.temperature());
  $("#temp").attr('class', thermostat.energyUsage());
  };

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
    getTemp()
    $("#power").attr('class',('Power_'+thermostat.powerSavingOn()));

  });

  function updateTemperature() {
  $('#temperat').text(thermostat.temperature);
  $('#temperat').attr('class', thermostat.energyUsage());
}



});
