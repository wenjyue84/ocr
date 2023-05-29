function recognizeText() {
    let imageUpload = document.getElementById('imageUpload');
    let recognizedText = document.getElementById('recognizedText');
    let downloadLink = document.getElementById('downloadLink');

    let file = imageUpload.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        Tesseract.recognize(e.target.result)
        .then(function(result) {
            recognizedText.textContent = result.text;

            // Create a blob of the recognized text and create a URL for it.
            let textBlob = new Blob([result.text], {type: 'text/plain'});
            let url = URL.createObjectURL(textBlob);

            downloadLink.href = url;
        });
    };

    reader.readAsDataURL(file);
}
