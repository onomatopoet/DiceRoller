//JavaScript Document
//Samuel Valencia
//October 1, 2014
//This script is used on die_roll.html

var diceRoll = function () {
return 1 + Math.floor(6 * Math.random());
};

var dieImage = function (junk) {
  if (junk === 1) {
    return '<circle cx="50" cy="50" r="10"/>';

  } else if (junk === 2) {
    return '<circle cx="33" cy="33" r="10"/>' +
    '<circle cx="66" cy="66" r="10"/>';

  } else if (junk === 3) {
    return '<circle cx="25" cy="25" r="10"/>' +
    '<circle cx="50" cy="50" r="10"/>' +
    '<circle cx="75" cy="75" r="10"/>';

  } else if (junk === 4) {
    return '<circle cx="25" cy="25" r="10"/>' +
    '<circle cx="75" cy="25" r="10"/>' +
    '<circle cx="25" cy="75" r="10"/>' +
    '<circle cx="75" cy="75" r="10"/>';

  } else if (junk === 5) {
    return '<circle cx="25" cy="25" r="10"/>' +
    '<circle cx="25" cy="75" r="10"/>' +
    '<circle cx="50" cy="50" r="10"/>' +
    '<circle cx="75" cy="25" r="10"/>' +
    '<circle cx="75" cy="75" r="10"/>';

  } else {
    return '<circle cx="25" cy="25" r="10"/>' +
    '<circle cx="25" cy="50" r="10"/>' +
    '<circle cx="25" cy="75" r="10"/>' +
    '<circle cx="75" cy="25" r="10"/>' +
    '<circle cx="75" cy="50" r="10"/>' +
    '<circle cx="75" cy="75" r="10"/>';
  }  
};

document.getElementById("roll_id").onclick = function () {
  var firstRoll = diceRoll();
  var secondRoll = diceRoll();
  
     document.getElementById("result").innerHTML =
          '<table width=200 height=100 bgcolor="white" border="1">' +
	        '<TR><TD>' +
          '<svg height="100" width="100">' +
          dieImage(firstRoll) + "</svg></TD>" +
          
          '<TD><svg height="100" width="100">' +
          dieImage(secondRoll) + "</svg></TD></TR></table>";
};
