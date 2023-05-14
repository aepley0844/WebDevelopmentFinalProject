function drawingPrompt(){
let nouns = ["A gorilla","A baby","Dr. Jeffries","A plane", "An evergreen tree", "A Snowman", "A lawyer", "A nun", "Your grandmother", "A worm", "Jesus", "A chicken", "A babooon", "A princess", "Shrek", "A rat"];
let modifiers = ["riding the subway", "throwing a tantrum", "teaching a lecture", "hugging their mother", "on a night out", "at Thanksgiving dinner", "learning Muay Thai", "at a rave", "but tiny", "gardening", "on vacation", "in 8 inch emo boots", "driving a tractor", "addicted to their phone", "at Catholic confession"];
    let currentNoun = nouns[Math.floor(Math.random()*nouns.length)];
    let currentModifier = modifiers[Math.floor(Math.random()*modifiers.length)];
    let outputLocation = document.getElementById("promptOutput");
    outputLocation.textContent = currentNoun + " " + currentModifier;
}


function canvasStuff(){

//establishing variables
let draw_color = "black"
let draw_width = "15"
let is_drawing = false;

let canvas = document.getElementById("canvas");

//setting canvas context
let context = canvas.getContext("2d");
let canvasColor = "#cce2c1"
context.fillStyle = canvasColor;
context.fillRect(0,0, canvas.width, canvas.height);

//selecting which color to draw with
let CRed = document.getElementById("Cred");
let CBlue = document.getElementById("Cblue");
let CGreen = document.getElementById("Cgreen");
let CYellow = document.getElementById("Cyellow");
let CInput = document.getElementById("colorPicker");
let eraser = document.getElementById("eraser");
CRed.addEventListener("click", function(){
    draw_color = "red";})
CBlue.addEventListener("click", function(){
    draw_color = "blue";});
CGreen.addEventListener("click",  function(){
    draw_color = "green";})
CYellow.addEventListener("click", function(){
    draw_color = "yellow";})
CInput.addEventListener("input", function(){
    draw_color = CInput.value;
})
eraser.addEventListener("click", function(){
    draw_color = canvasColor;
})
//setting brush size
let BSize = document.getElementById("penSize");
BSize.addEventListener("input", function(){
    draw_width = BSize.value;
})

//checking for when to draw and when to stop drawing
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false)

//starts the drawing process
function start(event){
    is_drawing = "true";
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft,
                    event.clientY - canvas.offsetTop);
    event.preventDefault();
}

//actually does the drawing
function draw(event){
    if (is_drawing){
        context.lineTo(event.clientX - canvas.offsetLeft,
                        event.clientY - canvas.offsetTop);
        context.strokeStyle = draw_color;
        context.lineWidth = draw_width;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
    }
}

//stops the drawing
function stop(event){
    if (is_drawing){
        context.stroke();
        context.closePath();
        is_drawing = false;
    }
    event.preventDefault();
}

//clearing the canvas
let paintBucket = document.getElementById("paintBucket");
paintBucket.addEventListener("input", function(){
    canvasColor = paintBucket.value
    context.fillStyle = canvasColor;
context.fillRect(0,0, canvas.width, canvas.height);
})

//save your drawing as an image
let saveIcon = document.getElementById("saveIcon");
saveIcon.addEventListener("click", function(){
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = canvas.toDataURL();
    link.click();
})

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
 else if (x == 8 || x == "September"){
   monthNum = 8;
   month = "September";
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




function reDay(x, y){
 for(let i = 1; i <= 32; i++){
   document.getElementById("d"+i).textContent = "";
 }
 for(let j = 1; j <= x; j++){
   let monDay = y + " " + j;
   console.log(monDay);
   let img = localStorage.getItem(monDay);
   if (img == null){
     img = " ";
   }
   document.getElementById("d"+j).textContent = j + "\n" + img;
 }
}
 
//Initial Calender
window.onload = function(){
 var dt = new Date();
 let monthNum = dt.getMonth();
 let month = daysMonth(monthNum, "m");
document.getElementById("month").textContent = month;
reDay(daysMonth(monthNum, "Num"), daysMonth(monthNum, "m"));
}




function backMonth(){
 //changing Month name
 let curMonthNum = daysMonth(document.getElementById("month").textContent, "mNum");
 let pervMonthNum = curMonthNum - 1;
 document.getElementById("month").textContent = daysMonth(pervMonthNum, "m");




 //changing number of days
 let dayNum = daysMonth(pervMonthNum, "Num");
 reDay(dayNum, daysMonth(pervMonthNum, "m"));
}




function fowardMonth(){
   //changing Month name
 let curMonthNum = daysMonth(document.getElementById("month").textContent, "mNum");
 let nextMonthNum = curMonthNum + 1;
 document.getElementById("month").textContent = daysMonth(nextMonthNum, "m");




 //changing number of days
 let dayNum = daysMonth(nextMonthNum, "Num");
 reDay(dayNum, daysMonth(nextMonthNum, "m"));
}




//getting img
function Submit(){
 let date = document.getElementById("dateH");
 let img = document.getElementById("imgH");
 localStorage.setItem(date, img);
 console.log(date + " " + img);
}
