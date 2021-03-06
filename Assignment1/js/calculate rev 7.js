var sizeCost = 0;

var upCost = 0;
  var base = 0;
  var ther = 0;
  var logo = 0;
  var init = 0;

var addCost = 0;
  var hot = 0;
  var lid = 0;
  var cord = 0;

var optCost = 0;
  var coff = 0;
  var milk = 0;
  var tea = 0;

var totalCost = 0;

function newImage(elImage){var colour = document.getElementById(elImage).value;
  switch(colour){
    case "Red":
      var elImage = document.getElementById('updateimage');
      elImage.innerHTML = "<img src='images/red.jpg'>";
    break;
    case "Purple":
      var elImage = document.getElementById('updateimage');
      elImage.innerHTML = "<img src='images/purple.jpg'>";
    break;
    case "Lime":
      var elImage = document.getElementById('updateimage');
      elImage.innerHTML = "<img src='images/lime.jpg'>";
    break;
    case "Black":
      var elImage = document.getElementById('updateimage');
      elImage.innerHTML = "<img src='images/black.jpg'>";
    break;
    case "Teal":
      var elImage = document.getElementById('updateimage');
      elImage.innerHTML = "<img src='images/teal.jpg'>";
    break;
  }
}

var elRed = document.getElementById('redMug');
elRed.addEventListener('change', function() {newImage(this.id); }, false)

var elPurp = document.getElementById('purpleMug');
elPurp.addEventListener('change', function() {newImage(this.id); }, false)

var elLime = document.getElementById('limeMug');
elLime.addEventListener('change', function() {newImage(this.id); }, false)

var elBlck = document.getElementById('blackMug');
elBlck.addEventListener('change', function() {newImage(this.id); }, false)

var elTeal = document.getElementById('tealMug');
elTeal.addEventListener('change', function() {newImage(this.id); }, false)

function setSize(elSize){var size = document.getElementById(elSize).value;
  switch(size){
    case "Small":
      sizeCost = 9.99;
    break;
    case "Medium":
      sizeCost = 12.99;
    break;
    case "Large":
      sizeCost = 14.99;
    break;
    case "Exlge":
      sizeCost = 15.99;
    break;
  }
  totalPrice();
}

var elSmall = document.getElementById('sSize');
elSmall.addEventListener('change', function() {setSize(this.id); }, false)

var elMed = document.getElementById('mSize');
elMed.addEventListener('change', function() {setSize(this.id); }, false)

var elLge = document.getElementById('lSize');
elLge.addEventListener('change', function() {setSize(this.id); }, false)

var elXl = document.getElementById('xlSize');
elXl.addEventListener('change', function() {setSize(this.id); }, false)

function setUp(upgradeElem){
  if(upgradeElem.id == "baseUp"){
   if (upgradeElem.checked) {
        base = 3.00;
        document.getElementById('baseHidden').disabled = true;
      } else {
        base = 0.00;
        document.getElementById('baseHidden').disabled = false;
      }
  } else if(upgradeElem.id == "therUp"){
   if (upgradeElem.checked) {
        ther = 7.00;
        document.getElementById('therHidden').disabled = true;
      } else {
        ther = 0.00;
        document.getElementById('therHidden').disabled = false;
      }
  } else if(upgradeElem.id == "logUp"){
   if (upgradeElem.checked) {
        logo = 6.00;
        document.getElementById('logHidden').disabled = true;
      } else {
        logo = 0.00;
        document.getElementById('logHidden').disabled = false;
      }
  } else if(upgradeElem.id == "initUp"){
   if (upgradeElem.checked) {
        init = 2.00;
        document.getElementById('initHidden').disabled = true;
      } else {
        init = 0.00;
        document.getElementById('initHidden').disabled = false;
      }
  }
  upCost = base + ther + logo + init;
  totalPrice();
}

var elBase = document.getElementById('baseUp');
elBase.addEventListener('change', function() {setUp(this ); }, false)

var elTher = document.getElementById('therUp');
elTher.addEventListener('change', function() {setUp(this ); }, false)

var elLog = document.getElementById('logUp');
elLog.addEventListener('change', function() {setUp(this ); }, false)

var elInit = document.getElementById('initUp');
elInit.addEventListener('change', function() {setUp(this ); }, false)

function setAdd(addElem){
  if(addElem.id == "hotAdd"){
   if (addElem.checked) {
        hot = 15.00;
        document.getElementById('hotHidden').disabled = true;
      } else {
        hot = 0.00;
        document.getElementById('hotHidden').disabled = false;
      }
  } else if(addElem.id == "lidAdd"){
   if (addElem.checked) {
        lid = 3.00;
        document.getElementById('lidHidden').disabled = true;
      } else {
        lid = 0.00;
        document.getElementById('lidHidden').disabled = false;
      }
  } else if(addElem.id == "cordAdd"){
   if (addElem.checked) {
        cord = 6.00;
        document.getElementById('cordHidden').disabled = true;
      } else {
        cord = 0.00;
        document.getElementById('cordHidden').disabled = false;
      }
  } 
  addCost = hot + lid + cord;
  totalPrice();
}

var elHot = document.getElementById('hotAdd');
elHot.addEventListener('change', function() {setAdd(this ); }, false)

var elLid = document.getElementById('lidAdd');
elLid.addEventListener('change', function() {setAdd(this ); }, false)

var elCord = document.getElementById('cordAdd');
elCord.addEventListener('change', function() {setAdd(this ); }, false)

function setOpt(optElem){
  if(optElem.id == "coffOpts"){
   if (optElem.checked) {
        coff = 15.00;
        document.getElementById('coffHidden').disabled = true;
      } else {
        coff = 0.00;
        document.getElementById('coffHidden').disabled = false;
      }
  } else if(optElem.id == "milkOpts"){
   if (optElem.checked) {
        milk = 3.00;
        document.getElementById('milkHidden').disabled = true;
      } else {
        milk = 0.00;
        document.getElementById('milkHidden').disabled = false;
      }
  } else if(optElem.id == "teaOpts"){
   if (optElem.checked) {
        tea = 6.00;
        document.getElementById('teaHidden').disabled = true;
      } else {
        tea = 0.00;
        document.getElementById('teaHidden').disabled = false;
      }
  } 
  optCost = coff +  milk + tea;
  totalPrice();
}

var elCoff = document.getElementById('coffOpts'); 
elCoff.addEventListener('change', function() {setOpt(this ); }, false)

var elMilk = document.getElementById('milkOpts'); 
elMilk.addEventListener('change', function() {setOpt(this ); }, false)

var elTea = document.getElementById('teaOpts'); 
elTea.addEventListener('change', function() {setOpt(this ); }, false)

function totalPrice(){
  var elTotal = document.getElementById('getCost');
  totalCost = sizeCost + upCost + addCost + optCost;
  elTotal.value = totalCost.toFixed(2);//fixing to 2 decimal places
}

//function checkPrice(){
//  var valTotal = sizeCost + upCost + addCost + optCost;//variable that will be used to compare to price in 'get cost' element - the read only element
//  if(document.getElementById('getCost').value.length == 0){//this validation is to check if the element is blank
//     alert('Please calculate total before ordering');//error message to be returned if element is blank
//     return false;
//  }
//  else if (document.getElementById('getCost').value != valTotal.toFixed(2)){//this is to ensure if a selection is changed after total has been calculated that the total is recalculated i.e. does the value shown match cost of current selection
//    alert('Selection has been changed - please re-calculate total before ordering');//error message if value shown does not represent current selection
//    return false;
//  }
//  return true;
//}


        
