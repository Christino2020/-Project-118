function setup(){
    canvas = createCanvas(190, 175)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YWqU23nr9/model.json', modelLoaded)
}
function modelLoaded(){
console.log("Model Loaded!")
}
function draw(){
image(video, 0, 0, 190, 175)
}