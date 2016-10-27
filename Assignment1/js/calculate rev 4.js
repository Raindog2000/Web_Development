var sizeCost = 0;
var upCost = 0;
var addCost = 0;
var optCost = 0;
var totalCost = 0;

function newImage(x){var colour = document.getElementById(x).value;
  switch(colour){
    case "red":
      //document.getElementById("updateimage").innerHTML = "<img src='images/red.jpg'>";
      var elImage = document.getElementById('updateimage');
      elImage.innerHTML = "<img src='images/red.jpg'>";
    break;
    case "purple":
      var elImage = document.getElementById('updateimage');
      elImage.innerHTML = "<img src='images/purple.jpg'>";
      //document.getElementById("updateimage").innerHTML = "<img src='images/purple.jpg'>";
    break;
    case "lime":
      //document.getElementById("updateimage").innerHTML = "<img src='images/lime.jpg'>";
      var elImage = document.getElementById('updateimage');
      elImage.innerHTML = "<img src='images/lime.jpg'>";
    break;
    case "black":
      //document.getElementById("updateimage").innerHTML = "<img src='images/black.jpg'>";
      var elImage = document.getElementById('updateimage');
      elImage.innerHTML = "<img src='images/black.jpg'>";
    break;
    case "teal":
      //document.getElementById("updateimage").innerHTML = "<img src='images/teal.jpg'>";
      var elImage = document.getElementById('updateimage');
      elImage.innerHTML = "<img src='images/teal.jpg'>";
    break;
  }
}

function setSize(x){var size = document.getElementById(x).value;
  switch(size){
    case "small":
      sizeCost = 9.99;
      //alert(sizeCost); alerts used to validate functionality
    break;
    case "medium":
      sizeCost = 12.99;
      //alert(sizeCost);
    break;
    case "large":
      sizeCost = 14.99;
      //alert(sizeCost);
    break;
    case "exlge":
      sizeCost = 15.99;
      //alert(sizeCost);
    break;
  }
}

function setUp(x){var up = document.getElementById(x).value;
  switch(up){
    case "noUpgrade":
      upCost = 0.00; //setting this to zero so if selected after one of the below, the cost will reset to zero
      //alert(upCost); alerts used to validate functionality
    break;
    case "base":
      upCost = 3.00;
      //alert(upCost);
    break;
    case "thermos":
      upCost = 7.00;
      //alert(upCost);
    break;
    case "logo":
      upCost = 6.00;
      //alert(upCost);
    break;
    case "initials":
      upCost = 2.00;
      //alert(upCost);
    break;
  }
}

function setAdd(x){var add = document.getElementById(x).value;
  switch(add){
    case "noAddons":
      addCost = 0.00; //setting this to zero so if selected after one of the below, the cost will reset to zero
      //alert(addCost); alerts used to validate functionality
    break;
    case "hot":
      addCost = 15.00;
      //alert(addCost);
    break;
    case "lid":
      addCost = 3.00;
      //alert(addCost);
    break;
    case "cord":
      addCost = 6.00;
      //alert(addCost);
    break;
  }
}

function setOpt(x){var opt = document.getElementById(x).value;
  switch(opt){
    case "noOptions":
      optCost = 0.00;
      //alert(optCost); alerts used to validate functionality
    break;
    case "coffee":
      optCost = 15.00;
      //alert(optCost);
    break;
    case "milk":
      optCost = 3.00;
      //alert(optCost);
    break;
    case "tea":
      optCost = 6.00;
      //alert(optCost);
    break;
  }
}

function totalPrice(){
  var elTotal = document.getElementById('getCost');
  totalCost = sizeCost + upCost + addCost + optCost;
  elTotal.value = totalCost.toFixed(2);//fixing to decimal places
}

function checkPrice(){
  if (totalCost == 0){//need to change this to 1) check for blank filed or 2) that price in totalcost matches actual total cost
      alert('Please select an item to purchase');
      return false;
  }
  return true;
}


        
