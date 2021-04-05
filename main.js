function setup(){
    canvas = createCanvas(300,300)
    video  = createCapture(VIDEO)
 video.hide()
 canvas.center()
 video.size(300,300)
}
function draw(){
    image(video, 0 ,0, 300, 300)
}