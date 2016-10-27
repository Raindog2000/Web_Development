var sizeCost = 0;
var upCost = 0;
var addCost = 0;
var optCost = 0;
var totalCost = 0;

function newImage(x){var colour = document.getElementById(x).value;
  switch(colour){
    case "Red":
      //document.getElementById("updateimage").innerHTML = "<img src='images/red.jpg'>"; //commented out old code
      var elImage = document.getElementById('updateimage');
      elImage.innerHTML = "<img src='images/red.jpg'>";
    break;
    case "Purple":
      var elImage = document.getElementById('updateimage');
      elImage.innerHTML = "<img src='images/purple.jpg'>";
      //document.getElementById("updateimage").innerHTML = "<img src='images/purple.jpg'>"; //commented out old code
    break;
    case "Lime":
      //document.getElementById("updateimage").innerHTML = "<img src='images/lime.jpg'>"; //commented out old code
      var elImage = document.getElementById('updateimage');
      elImage.innerHTML = "<img src='images/lime.jpg'>";
    break;
    case "Black":
      //document.getElementById("updateimage").innerHTML = "<img src='images/black.jpg'>"; //commented out old code
      var elImage = document.getElementById('updateimage');
      elImage.innerHTML = "<img src='images/black.jpg'>";
    break;
    case "Teal":
      //document.getElementById("updateimage").innerHTML = "<img src='images/teal.jpg'>"; //commented out old code
      var elImage = document.getElementById('updateimage');
      elImage.innerHTML = "<img src='images/teal.jpg'>";
    break;
  }
}

function setSize(x){var size = document.getElementById(x).value;
  switch(size){
    case "Small":
      sizeCost = 9.99;
      //alert(sizeCost); //alerts used to validate function working as expected
    break;
    case "Medium":
      sizeCost = 12.99;
      //alert(sizeCost); //alerts used to validate function working as expected
    break;
    case "Large":
      sizeCost = 14.99;
      //alert(sizeCost); //alerts used to validate function working as expected
    break;
    case "Exlge":
      sizeCost = 15.99;
      //alert(sizeCost); //alerts used to validate function working as expected
    break;
  }
}

function setUp(x){var up = document.getElementById(x).value;
  switch(up){
    case "no_Upgrade":
      upCost = 0.00; //setting this to zero so if selected after one of the below, the cost will reset to zero
      //alert(upCost); //alerts used to validate function working as expected
    break;
    case "Trans_Base":
      upCost = 3.00;
      //alert(upCost); //alerts used to validate function working as expected
    break;
    case "Thermos":
      upCost = 7.00;
      //alert(upCost); //alerts used to validate function working as expected
    break;
    case "Upload_Logo":
      upCost = 6.00;
      //alert(upCost); //alerts used to validate function working as expected
    break;
    case "Eng_Initials":
      upCost = 2.00;
      //alert(upCost); //alerts used to validate function working as expected
    break;
  }
}

function setAdd(x){var add = document.getElementById(x).value;
  switch(add){
    case "no_Addons":
      addCost = 0.00; //setting this to zero so if selected after one of the below, the cost will reset to zero
      //alert(addCost); //alerts used to validate function working as expected
    break;
    case "Hot_Plate":
      addCost = 15.00;
      //alert(addCost); //alerts used to validate function working as expected
    break;
    case "Mug_Lid":
      addCost = 3.00;
      //alert(addCost); //alerts used to validate function working as expected
    break;
    case "Pull_Cord":
      addCost = 6.00;
      //alert(addCost); //alerts used to validate function working as expected
    break;
  }
}

function setOpt(x){var opt = document.getElementById(x).value;
  switch(opt){
    case "no_Options":
      optCost = 0.00; //setting this to zero so if selected after one of the below, the cost will reset to zero
      //alert(optCost); //alerts used to validate function working as expected
    break;
    case "Coffee":
      optCost = 15.00;
      //alert(optCost); //alerts used to validate function working as expected
    break;
    case "Cond_Milk":
      optCost = 3.00;
      //alert(optCost); //alerts used to validate function working as expected
    break;
    case "Tea_Bags":
      optCost = 6.00;
      //alert(optCost); //alerts used to validate function working as expected
    break;
  }
}

function totalPrice(){
  var elTotal = document.getElementById('getCost');
  totalCost = sizeCost + upCost + addCost + optCost;
  elTotal.value = totalCost.toFixed(2);//fixing to 2 decimal places
}

//var elCalc = document.getElementById('calcTotal');
//elCalc.addEventListener("click", totalPrice, false);// When its clicked call totalPrice()

function checkPrice(){
  var valTotal = sizeCost + upCost + addCost + optCost;//variable that will be used to compare to price in 'get cost' element - the read only element
  if(document.getElementById('getCost').value.length == 0){//this validation is to check if the element is blank
     alert('Please calculate total before ordering');//error message to be returned if element is blank
     return false;
  }
  else if (document.getElementById('getCost').value != valTotal.toFixed(2)){//this is to ensue if a selection is changed after total has been calculated that the total is recalculated i.e. does the value shown match cost of current selection
    alert('Selection has been changed - please re-calculate total before ordering');//error message if value shown does not represent current selection
    //alert(document.getElementById('getCost').value) //used to validate function
    //alert(valTotal.toFixed(2)) //used to validate function
    return false;
  }
  return true;
}

//var elCheck = document.getElementById('order');
//elCheck.addEventListener("submit", checkPrice, false);// When it is submitted call checkPrice()


        
