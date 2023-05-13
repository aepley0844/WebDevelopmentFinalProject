function drawingPrompt(){
let nouns = ["A gorilla","A baby","Dr. Jeffries","A plane", "An evergreen tree", "A Snowman", "A lawyer", "A nun", "Your grandmother", "A worm", "Jesus", "A chicken", "A babooon", "A princess", "Shrek", "A rat"];
let modifiers = ["riding the subway", "throwing a tantrum", "teaching a lecture", "hugging their mother", "on a night out", "at Thanksgiving dinner", "learning Muay Thai", "at a rave", "but tiny", "gardening", "on vacation", "in 8 inch emo boots", "driving a tractor", "addicted to their phone", "at Catholic confession"];
    let currentNoun = nouns[Math.floor(Math.random()*nouns.length)];
    let currentModifier = modifiers[Math.floor(Math.random()*modifiers.length)];
    let outputLocation = document.getElementById("promptOutput");
    outputLocation.textContent = currentNoun + " " + currentModifier;
}

function canvasStuff(){
let canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 600;

let context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(0,0, canvas.width, canvas.height);

let draw_color = "black"
let draw_width = "2"
let is_drawing = false;

function changeColor(input){
    draw_color = input.style.backgroundColor;
}

canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false)

function start(event){
    is_drawing = "true";
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft,
                    event.clientY - canvas.offsetTop);
    event.preventDefault();
}

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

function stop(event){
    if (is_drawing){
        context.stroke();
        context.closePath();
        is_drawing = false;
    }
    event.preventDefault();
}

}