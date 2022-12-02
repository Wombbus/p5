function preload(){

}

function setup(){
canvas = createCanvas(600,500)
canvas.center()
video = createCapture(VIDEO)
video.hide()
color = ""
}
function draw(){
image(video, 0,0, 600,500)
tint(color)
fill("red")
circle(0,0,50)
}

function applyColor(){
color = document.getElementById("colors").value
}