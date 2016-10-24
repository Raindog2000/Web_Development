var sizeCost = 0;
var upCost = 0;
var addCost = 0;
var optCost = 0;
var totalCost = 0;


function newImage(x){var colour = document.getElementById(x).value;
  switch(colour){
    case "red":
      document.getElementById("updateimage").innerHTML = "<img src='images/red.jpg'>";
    break;
    case "purple":
      document.getElementById("updateimage").innerHTML = "<img src='images/purple.jpg'>";
    break;
    case "lime":
      document.getElementById("updateimage").innerHTML = "<img src='images/lime.jpg'>";
    break;
    case "black":
      document.getElementById("updateimage").innerHTML = "<img src='images/black.jpg'>";
    break;
    case "teal":
      document.getElementById("updateimage").innerHTML = "<img src='images/teal.jpg'>";
    break;
  }
}

function setSize(x){var size = document.getElementById(x).value;
  switch(size){
    case "small":
      var sizeCost = 9.99;
      alert(sizeCost);
    break;
    case "medium":
      var sizeCost = 12.99;
      alert(sizeCost);
    break;
    case "large":
      var sizeCost = 14.99;
      alert(sizeCost);
    break;
    case "exlge":
      var sizeCost = 15.99;
      alert(sizeCost);
    break;
  }
}

function setUp(x){var up = document.getElementById(x).value;
  switch(up){
    case "noUpgrade":
      var upCost = 0.00; //setting this to zero so if selected after one of the below, the cost will reset to zero
      alert(upCost);
    break;
    case "base":
      var upCost = 3.00;
      alert(upCost);
    break;
    case "thermos":
      var upCost = 7.00;
      alert(upCost);
    break;
    case "logo":
      var upCost = 6.00;
      alert(upCost);
    break;
    case "initials":
      var upCost = 2.00;
      alert(upCost);
    break;
  }
}

function setAdd(x){var add = document.getElementById(x).value;
  switch(add){
    case "noAddons":
      var addCost = 0.00; //setting this to zero so if selected after one of the below, the cost will reset to zero
      alert(addCost);
    break;
    case "hot":
      var addCost = 15.00;
      alert(addCost);
    break;
    case "lid":
      var addCost = 3.00;
      alert(addCost);
    break;
    case "cord":
      var addCost = 6.00;
      alert(addCost);
    break;
  }
}

function setOpt(x){var opt = document.getElementById(x).value;
  switch(opt){
    case "noOptions":
      var optCost = 0.00; //setting this to zero so if selected after one of the below, the cost will reset to zero
      alert(optCost);
    break;
    case "coffee":
      var optCost = 15.00;
      alert(optCost);
    break;
    case "milk":
      var optCost = 3.00;
      alert(optCost);
    break;
    case "tea":
      var optCost = 6.00;
      alert(optCost);
    break;
  }
}
        
