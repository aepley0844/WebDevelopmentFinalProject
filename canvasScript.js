function drawingPrompt(){
let nouns = ["A gorilla","A baby","Dr. Jeffries","A plane", "An evergreen tree", "A Snowman", "A lawyer", "A nun", "Your grandmother", "A worm", "Jesus", "A chicken", "A babooon", "A princess", "Shrek", "A rat"];
let modifiers = ["riding the subway", "throwing a tantrum", "teaching a lecture", "hugging their mother", "on a night out", "at Thanksgiving dinner", "learning Muay Thai", "at a rave", "but tiny", "gardening", "on vacation", "in 8 inch emo boots", "driving a tractor", "addicted to their phone", "at Catholic confession"];
    let currentNoun = nouns[Math.floor(Math.random()*nouns.length)];
    let currentModifier = modifiers[Math.floor(Math.random()*modifiers.length)];
    let outputLocation = document.getElementById("promptOutput");
    outputLocation.textContent = currentNoun + " " + currentModifier;
}

//using
function canvasStuff(){

//establishing variables
let draw_color = "black"
let draw_width = "2"
let is_drawing = false;

let canvas = document.getElementById("canvas");

//setting canvas context
let context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(0,0, canvas.width, canvas.height);

//selecting which color to draw with
let CRed = document.getElementById("Cred");
let CBlue = document.getElementById("Cblue");
let CGreen = document.getElementById("Cgreen");
let CYellow = document.getElementById("Cyellow");
let CInput = document.getElementById("colorPicker")
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

}