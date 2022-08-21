leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreleftwrist=0;
song1="";
song2="";
function preload(){
    song1=loadSound("song1.mp3");
    song2=loadSound("song2.mp3");
}
function draw(){
    image(video,0,0,600,350);
}
function setup(){
    canvas=createCanvas(600,330);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("posenet model is initialized.")
}
function gotPoses(results){
    if(results > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("left wrist x= "+leftWristX+" and left wrist y= "+leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("right wrist x= "+rightWristX+" and right wrist y= "+rightWristY);

    }
}