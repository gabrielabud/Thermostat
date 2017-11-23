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

  $('#sel-city').change(function() {
  var city = $('#sel-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ff49585b94915de068db1f6cdea6f7f3&units=metric', function(data) {
    $('#temperature-outside').text(data.main.temp)
  })
  })
});
