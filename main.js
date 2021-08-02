//https://teachablemachine.withgoogle.com/models/rw0rmlfSk/
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90

})
var camera = document.getElementById("camera")
Webcam.attach("#camera")

function capture() {
    Webcam.snap(
        function (data_uri) {
            document.getElementById("result").innerHTML = "<img id='captured_image' src = ' " + data_uri + " '>";
        }
    )
}
//teachable machine and machine learning starts here
console.log("ml5 version", ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rw0rmlfSk/model.json', model_loaded)

function model_loaded() {
    console.log("Model Laded Sucessfully")
}

function compare() {
    img = document.getElementById("captured_image")
    classifier.classify(img, got_results)
    console.log("Compare the Picture")
}

function got_results(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        document.getElementById("object_name").innerHTML = results[0].label
        percentage = results[0].confidence.toFixed(3)
        per = percentage * 100
        console.log(per)
        document.getElementById("object_acc").innerHTML = per + " %"
    }
}