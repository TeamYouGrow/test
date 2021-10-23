// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */


     var elems= null;

    elems = document.querySelector('#modal1');
    var instances = M.Modal.init(elems);
    var instance = M.Modal.getInstance(elems);
          
         console.log(elems);
        
   
 //
// Classifier Variable
  // Classifier Variable
  let classifier;
  // Model URL
  let imageModelURL = 'https://teachablemachine.withgoogle.com/models/sKxs69PgB/';
  
  // Video
  let video;
  let flippedVideo;
  // To store the classification
  let label = "";

  // Load the model first
  function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
       
  }
function setup() {
var cnv = createCanvas(800, 800);
var x = (windowWidth - width) / 2;
var y = (windowHeight - height) / 2;
cnv.position(x, y);
video = createCapture({
audio: false,
video: {
facingMode: {
exact: "environment"
}
}
});
//But hide the live video to the user
video.hide();
//Set the size of the video (and image)
video.size(800, 800);
flippedVideo = ml5.flipImage(video);
// Start classifying
classifyVideo();
}



  function draw() {
    background(0);
    // Draw the video
    image(flippedVideo, 0, 0);

    // Draw the label
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);
  }

  // Get a prediction for the current video frame
  function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
    flippedVideo.remove();

  }

  // When we get a result
  function gotResult(error, results) {
    // If there is an error
    if (error) {
      console.error(error);
      return;
    }
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;
    // Classifiy again!
    classifyVideo();
  

if(label === "Tomato") {
  water = "123ml";
}
else if (label === "Fenugreek") {
  water = "456ml";
}

else if(label === "Basil") {
  water = "789ml";
}

else if(label === "Aloe Vera") {
  //window.location.href ="video.html";
       //alert("Hello"); 
     instance.open();
 //
}

else if(label === "Human") {
  water = "This is not a plant.";
}

}

