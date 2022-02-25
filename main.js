var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();


function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if (Content == "take my selfie"){
        speak();
        console.log("Taking Selfie");
    }
    
}

function speak() {
    var synth = window.speechSynthesis;
    speakData ="taking your selfie in five seconds";
    var UtterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(UtterThis);
    Webcam.attach(camera);
    setTimeout(function() { 
        take_snapshot();
        save();
    }, 5000);

}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90,
});

camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfie_img"/>';
    });

}

function save(){
    var link = document.getElementById("link");
    var img = document.getElementById("selfie_img").src;
    link.href=img;
    link.click();
}









