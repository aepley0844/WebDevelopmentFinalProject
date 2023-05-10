// Prompt Generator
function drawingPrompt(){
  //js not yet done
}

// Calender:
var imgs = [];
var days = [];
var months = [];

var daysNum = 0;
var month = "";
var monthNum = 0;

//Days in a Month
function daysMonth(x, y){
  if (x == 0 || x == "January"){
    monthNum = 0;
    month = "January";
    daysNum = 31;
  }
  else if (x == 1 || x == "February"){
    monthNum = 1;
    month = "February";
    daysNum = 28;
  }
  else if (x == 2 || x == "March"){
    monthNum = 2;
    month = "March";
    daysNum = 31;
  }
  else if (x == 3 || x == "April"){
    monthNum = 3;
    month = "April"
    daysNum = 30;
  }
  else if (x == 4 || x == "May"){
    monthNum = 4;
    month = "May";
    daysNum = 31;
  }
  else if (x == 5 || x == "June"){
    monthNum = 5;
    month = "June";
    daysNum = 30;
  }
  else if (x == 6 || x == "July"){
    monthNum = 6;
    month = "July";
    daysNum = 31;
  }
  else if (x == 7 || x == "August"){
    monthNum = 7;
    month = "August";
    daysNum = 31;
  }
  else if (x == 8 || x == "Septemper"){
    monthNum = 8;
    month = "Septemper";
    daysNum = 30;
  }
  else if (x == 9 || x == "October"){
    monthNum = 9;
    month = "October";
    daysNum = 31;
  }
  else if (x == 10 || x == "November"){
    monthNum = 10;
    month = "November";
    daysNum = 30;
  }
  else if (x == 11 || x == "December"){
    monthNum = 11;
    month = "December";
    daysNum = 31;
  }
  if (y == "mNum"){
    return monthNum;
  }
  else if (y == "m"){
    return month;
  }
  else if (y = "Num"){
    return daysNum;
  }
}

function reDay(x){
  for(let i = 1; i <= 32; i++){
    document.getElementById("d"+i).textContent = "";
  }
  for(let j = 1; j <= x; j++){
    document.getElementById("d"+j).textContent = j;
  }
}
    
//Initial Calender
window.onload = function(){
  var dt = new Date();
  let monthNum = dt.getMonth();
  let month = daysMonth(monthNum, "m");
  
document.getElementById("month").textContent = month;
reDay(daysMonth(monthNum, "Num"));
}

function backMonth(){
  //changing Month name
  let curMonthNum = daysMonth(document.getElementById("month").textContent, "mNum");
  let pervMonthNum = curMonthNum - 1;
  document.getElementById("month").textContent = daysMonth(pervMonthNum, "m");

  //changing number of days
  let dayNum = daysMonth(pervMonthNum, "Num")
  reDay(dayNum);
}

function fowardMonth(){
    //changing Month name
  let curMonthNum = daysMonth(document.getElementById("month").textContent, "mNum");
  let pervMonthNum = curMonthNum + 1;
  document.getElementById("month").textContent = daysMonth(pervMonthNum, "m");

  //changing number of days
  let dayNum = daysMonth(pervMonthNum, "Num")
  reDay(dayNum);
}

//getting img