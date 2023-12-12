noseX = 0;
noseY = 0;

lefteyeX = 0;
lefteyeY = 0;

function preload() 
{
  sunglasses = loadImage('https://i.postimg.cc/Y9yf5mYF/sunglasses.png');
  hat = loadImage('https://i.postimg.cc/85qjQ9VB/hat.png');
}


function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('PoseNet is Initialized');
}


function draw()
{
  image(video, 0, 0, 300, 300);
  image(hat, noseX, noseY, 170, 95);
  image(sunglasses, lefteyeX, lefteyeY, 100, 100);
}


function take_snapshot()
{
  save('imageFilter.png');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x - 85;
    noseY = results[0].pose.nose.y - 150;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);

    console.log(results);
    lefteyeX = results[0].pose.leftEye.x - 75;
    lefteyeY = results[0].pose.leftEye.y - 43;
    console.log("left eye x = " + lefteyeX);
    console.log("left eye y = " + lefteyeY);
  }
}