//Function to find the average of two colours given their hex codes
//Does not include validation of input (as specified)

function avgColours () {
  //get the values from the form and validate
  hex1 = document.getElementById('colour1').value;
  hex2 = document.getElementById('colour2').value;
  hex1 = removePound(hex1);
  hex2 = removePound(hex2);

  if (!(validate(hex1)) || !(validate(hex2))){
    console.log("should alert");
    alert("Please enter a 6-digit hex code of letters and numbers");
    return 0;
  }

  var result = "";

  //loop through red, green, and blue substrings
  for (var i=0; i<6; i+=2){

    //get hex values
    var colour1 = hex1.substring(i, i+2);
    var colour2 = hex2.substring(i, i+2);

    //convert hex to decimal and find avgerage
    var avgCol = avg(parseInt(colour1, 16), parseInt(colour2, 16));

    //convert decimal back to hex:
    avgCol = decToHex(avgCol);

    //add to result
    result = result.concat(avgCol);
  }

  //hacky way to display result on web page
  if (result != "NaNNaNNaN"){
    document.getElementById('hex1').innerHTML = hex1;
    document.getElementById('hex2').innerHTML = hex2;
    document.getElementById('hex1').style.color = "#" + hex1;
    document.getElementById('hex2').style.color = "#" + hex2;
    document.getElementById('resultVal').innerHTML = result;
    document.getElementById('resultVal').style.color = "#" + result;

  $("#resultText").show();
  }
  return result;
}

//** Support functions **//

//Average
function avg(num1, num2) {
  return (num1 + num2)/2;
}

//Convert decimal to hex
function decToHex(num) {
  num = (Math.round(num)).toString(16);
  if(num.length == 1){
    return ("0".concat(num));
  }
  else return num;
}

function removePound(input){
  if (input.charAt(0) == '#'){
    return input.substring(1);
  }
  else return input;
}

function validate(input){
  if (input.length != 6){
    return false;
  }
  input = input.toLowerCase();
  var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{ghijklmnopqrstuvwxyz}|\\":<>\?]/);
  if (pattern.test(input)){
    return false;
  }
  console.log("passed regex");
  return true;
}
